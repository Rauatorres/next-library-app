import axios from "axios";

const baseUrl = 'http://localhost:5000/';

async function getAll(url: string){
    const res = await axios.get(baseUrl + url);
    return res.data;
}

async function getOneByContent<Object extends object>(url: string, object: Object) {
    return (await axios.post(baseUrl + url, object)).data;
}

export { getAll, getOneByContent }