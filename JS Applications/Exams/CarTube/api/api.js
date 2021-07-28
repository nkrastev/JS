export const settings={
    host:''
}

async function request(url, options) {
    try {
        const response = await fetch(url, options);
        if (response.ok == false) {
            const error = await response.json();
            throw new Error(error.message);
        }
        try {           
            return await response.json();
        } catch (err) {
            console.log(err.message);
            //alert(err.message);
            return response;
        }
    } catch (err) {
        console.log(err.message);
        alert(err.message);        
        throw err;
    }
}

function getOptions(method = 'get', body) {
    const options = {
        method,
        headers: {},
    };

    const token = sessionStorage.getItem('authToken');
    if (token != null) {
        options.headers['X-Authorization'] = token;
    }

    if (body) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }

    return options;
}

export async function get(url) {
    return await request(url, getOptions());
}

export async function post(url, data) {
    return await request(url, getOptions('post', data));
}

export async function put(url, data) {
    return await request(url, getOptions('put', data));
}

export async function del(url, data) {
    return await request(url, getOptions('delete', data));
}

export async function login(username, password) {
    const result= await post(settings.host+'/users/login', {username, password});
    sessionStorage.setItem('userId', result._id);
    sessionStorage.setItem('username', result.username);
    sessionStorage.setItem('authToken', result.accessToken);    
    return result;
}
export async function register(username, password) {
    const result= await post(settings.host+'/users/register', {username, password});
    sessionStorage.setItem('userId', result._id);    
    sessionStorage.setItem('authToken', result.accessToken);
    sessionStorage.setItem('username', result.username);    
    return result;
}

export async function logout() {
    const result= await get(settings.host+'/users/logout');
    sessionStorage.removeItem('userId', result._id);    
    sessionStorage.removeItem('authToken', result.accessToken);
    sessionStorage.removeItem('username', result.username);    
    
    return result;
}