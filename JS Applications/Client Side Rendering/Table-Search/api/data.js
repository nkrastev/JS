//from viktorpts, task cookbook

import createApi from './api.js';

const api = createApi(null, null, (msg) => alert(msg));

const endpoints = {
    TABLE_DATA: 'jsonstore/advanced/table',   
};

export async function getData() {
    return await api.get(endpoints.TABLE_DATA);
}

export async function addItemOption(option) {
    return await api.post(endpoints.TABLE_DATA, option);
}
