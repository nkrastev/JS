import * as api from './api.js';

const host= 'http://localhost:3030';

api.settings.host=host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

//specific queries
export async function getAllListings() {
    return await api.get(host + "/data/cars?sortBy=_createdOn%20desc");
}
export async function createListing(data) {
    return await api.post(host + '/data/cars', data);
}
export async function getListingById(id) {
    return await api.get(host + '/data/cars/'+id);
}
export async function deleteListing(id) {
    return await api.del(host + '/data/cars/'+id);
}
export async function editListing(id, data){
    return await api.put(host + '/data/cars/'+id, data);
}
export async function getUserListings(userId) {
    const allData= await api.get(host + '/data/cars');    
    return allData.filter(l=>l._ownerId==userId);
}





