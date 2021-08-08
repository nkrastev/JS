import * as api from './api.js';

const host= 'http://localhost:3030';

api.settings.host=host;

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

//specific queries
export async function homeQuery() {
    return await api.get(host + "/data/destinations");
}
export async function createQuery(data) {
    return await api.post(host + '/data/destinations', data);
}
export async function detailsQueryById(id) {
    return await api.get(host + '/data/destinations/'+id);
}
export async function editQueryById(id, data){   
    return await api.put(host + '/data/destinations/'+id, data);
}
export async function deleteItemById(id){      
    return await api.del(host + '/data/destinations/'+id);
}
export async function filterByOwnerId(ownerId) {
    return await api.get(host + `/data/destinations?where=_ownerId%3D%22${ownerId}%22`);
}


export async function sortedBy(sortingParam) {
    return await api.get(host +`/data/destinations?sortBy=${sortingParam}%20desc`)
}
export async function getCountOfRecords() {
    return await api.get(host +`/data/destinations?count`)
}
export async function getSpecificProperties(specificProps) {
    //GET /data/recipes?select=_id%2Cname%2Cimg
    return await api.get(host +`/data/destinations?select=${specificProps}`);
}
export async function searchForString(specificProps) {
    //GET /data/recipes?select=_id%2Cname%2Cimg
    return await api.get(host +`/data/destinations?select=${specificProps}`);
}









