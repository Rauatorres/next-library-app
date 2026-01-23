import axios from "axios";

const baseUrl = 'http://localhost:5000/';

async function getAll(url: string){
    const res = await axios.get(baseUrl + url);
    return res.data;
}

async function getOneByContent<Object extends object>(url: string, object: Object) {
    return (await axios.post(baseUrl + url, object)).data;
}

async function getOneById<Object extends object>(url: string, id: string){
    return (await axios.get<Object>(baseUrl + url + `/${id}`)).data;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function create<Object extends object>(url: string, document: Object): Promise<any> {
    return (await axios.post<Object>(baseUrl + url, document));
}

async function update<Object extends object>(url: string, document: Object){
    return (await axios.patch<Object>(baseUrl + url, document))
}

export { getAll, getOneByContent, getOneById, create, update }