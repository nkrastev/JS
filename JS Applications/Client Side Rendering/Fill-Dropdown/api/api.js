//from viktorpts, task cookbook

export default function createApi(beginRequest, endRequest) {
    const endpoints = {
        REGISTER: 'users/register',
        LOGIN: 'users/login',
        LOGOUT: 'users/logout'
    };

    return {
        beginRequest() {
            if (typeof beginRequest == 'function') {
                beginRequest();
            }
        },

        endRequest() {
            if (typeof endRequest == 'function') {
                endRequest();
            }
        },

        host(endpoint) {
            return `http://localhost:3030/${endpoint}`;
        },

        getOptions(headers) {
            const token = sessionStorage.getItem('userToken');

            const options = { headers: headers || {} };

            if (token !== null) {
                Object.assign(options.headers, { 'X-Authorization': token });
            }

            return options;
        },

        async request(endpoint, options) {
            let response;

            this.beginRequest();
            try {
                response = await fetch(endpoint, options);

                if (response.status == 200) {
                    return await response.json();
                } else {
                    const error = await response.json();
                    throw new Error(error.message);
                }
            } catch (err) {
                if (err instanceof SyntaxError) {
                    return response;
                } else if(err.message == 'Invalid access token') {
                    console.log('Invalid session, resetting storage');
                    sessionStorage.clear();
                    window.location.pathname = '/';
                } else {
                    throw err;
                }
            } finally {
                this.endRequest();
            }
        },

        async get(endpoint) {
            return this.request(this.host(endpoint), this.getOptions());
        },
        
        async post(endpoint, body) {
            const options = this.getOptions({ 'Content-Type': 'application/json' });
            options.method = 'POST';
            options.body = JSON.stringify(body);

            return this.request(this.host(endpoint), options);
        },
        
    };
};