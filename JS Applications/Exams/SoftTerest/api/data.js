import * as api from './api.js';

const host= 'http://localhost:3030';

api.settings.host=host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

//specific queries

export async function getDashboard() {
    return await api.get(host + "/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc");
}
export async function getDetailsById(id) {
    return await api.get(host + '/data/ideas/'+id);
}
export async function create(data) {
    console.log(data);
    return await api.post(host + '/data/ideas', data);
}
export async function deleteById(id) {
    return await api.del(host + '/data/ideas/'+id);
}










export async function getAllMemes() {
    return await api.get(host + "/data/memes?sortBy=_createdOn%20desc");
}
export async function getMemeDetailsById(id) {
    return await api.get(host + '/data/memes/'+id);
}
export async function createMeme(data) {
    return await api.post(host + '/data/memes', data);
}

export async function deleteMeme(id) {
    return await api.del(host + '/data/memes/'+id);
}

export async function editMeme(id, data){
    return await api.put(host + '/data/memes/'+id, data);
}

export async function getUserMemes(userId) {
    return await api.get(host + `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}





