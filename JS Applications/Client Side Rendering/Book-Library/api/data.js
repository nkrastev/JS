//from viktorpts, task cookbook

import createApi from './api.js';

const api = createApi(null, null, (msg) => alert(msg));

const endpoints = {
    BOOKS_DATA: 'jsonstore/collections/books',   
    BOOK_BY_ID: 'jsonstore/collections/books/',   
    SINGLEBOOK: 'jsonstore/collections/books/',   
    EDIT_BY_ID: 'jsonstore/collections/books/',   
};

export async function getData() {
    return await api.get(endpoints.BOOKS_DATA);
}

export async function getSingleBookById(id) {
    return await api.get(endpoints.SINGLEBOOK+id);
}

export async function addItemOption(option) {
    return await api.post(endpoints.TABLE_DATA, option);
}

export async function deleteBookById(id) {
    return await api.delete(endpoints.BOOK_BY_ID + id);
}

export async function addBook(book) {
    return await api.post(endpoints.BOOKS_DATA, book);
}

export async function editBook(id, book) {
    return await api.put(endpoints.EDIT_BY_ID + id, book);
}
