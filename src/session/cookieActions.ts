'use server'
import { cookies } from "next/headers";

async function setCookie(name: string, value: string){
    const cookieStore = await cookies();
    cookieStore.set(name, value);
}

async function getCookie(name: string) {
    const cookieStore = await cookies();
    return cookieStore.get(name)?.value
}

export { setCookie, getCookie }