import http from './base.services';
const getAll = async () => {
    
    var resp = {}
    try {
        const response = await http.get('/estates');
        resp = response.data
    } catch (e) {
        resp = e.resp.data??null;
    }
    return resp;
};

export const Estate = {
    getAll
}