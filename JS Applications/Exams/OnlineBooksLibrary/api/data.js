import * as api from './api.js';

const host= 'http://localhost:3030';

api.settings.host=host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

//specific queries
export async function homeQuery() {
    return await api.get(host + "/data/books?sortBy=_createdOn%20desc");
}
export async function createItem(data) {
    return await api.post(host + '/data/books', data);
}
export async function getItemById(id) {
    return await api.get(host + '/data/books/'+id);
}
export async function deleteItem(id) {
    return await api.del(host + '/data/books/'+id);
}
export async function editItem(id, data){
    return await api.put(host + '/data/books/'+id, data);
}
export async function getMyBooks(userId) {
    
    return await api.get(host + `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}