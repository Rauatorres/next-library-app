import axios, { AxiosError } from "axios";

const baseUrl = 'http://localhost:5000/';

async function request(callback: () => Promise<any>){
    try{
        return await callback();
    }catch (err){
        if(err instanceof AxiosError){
            console.log(`${err.status} - ${err.message}`);
        }
    }
}

async function getAll(document: string){
    return await request(async () => {
        const res = await axios.get(baseUrl + document);
        return res.data;
    });
}

export { getAll }