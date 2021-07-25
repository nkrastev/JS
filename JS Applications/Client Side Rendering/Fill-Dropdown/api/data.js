//from viktorpts, task cookbook

import createApi from './api.js';

const api = createApi(null, null, (msg) => alert(msg));

const endpoints = {
    DROPDOWN_DATA: 'jsonstore/advanced/dropdown',
   
};

export async function getData() {
    return await api.get(endpoints.DROPDOWN_DATA);
}

export async function addItemOption(option) {
    return await api.post(endpoints.DROPDOWN_DATA, option);
}
