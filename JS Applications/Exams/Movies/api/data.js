import * as api from './api.js';

const host= 'http://localhost:3030';

api.settings.host=host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

//specific queries
export async function getAllMovies() {
    return await api.get(host + "/data/movies");
}
export async function createMovie(data) {
    return await api.post(host + '/data/movies', data);
}
export async function getMovieById(id) {
    return await api.get(host + '/data/movies/'+id);
}
export async function deleteMovie(id) {
    return await api.del(host + '/data/movies/'+id);
}
export async function editMovie(id, data){
    return await api.put(host + '/data/movies/'+id, data);
}







export async function getAllListings() {
    return await api.get(host + "/data/cars?sortBy=_createdOn%20desc");
}
export async function createListing(data) {
    return await api.post(host + '/data/cars', data);
}
export async function getListingById(id) {
    return await api.get(host + '/data/cars/'+id);
}


export async function getUserListings(userId) {
    return await api.get(host + `/data/cars?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);    
    //return allData.filter(l=>l._ownerId==userId);
}





