import * as api from './api.js';

const host= 'http://localhost:3030';

api.settings.host=host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

//specific queries
export async function getDataForCatalogue() {
    return await api.get(host + "/data/wiki?sortBy=_createdOn%20desc");
}
export async function createArticle(data) {
    return await api.post(host + '/data/wiki', data);
}
export async function getArticleById(id) {
    return await api.get(host + '/data/wiki/' + id);
}
export async function deleteArticle(id) {
    return await api.del(host + '/data/wiki/' + id);
}
export async function editArticle(id, data){
    return await api.put(host + '/data/wiki/'+id, data);
}
export async function getHome() {
    return await api.get(host + `/data/wiki?sortBy=_createdOn%20desc&distinct=category`)
}
export async function searchQuery(query) {
    return await api.get(host + `/data/wiki?where=title%20LIKE%20%22${query}%22`);
}