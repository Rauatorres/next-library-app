'use client'

import { create } from "@/src/api/queries";
import Button from "@/src/components/atoms/Button";
import LinkButton from "@/src/components/atoms/LinkButton";
import TextInput from "@/src/components/atoms/TextInput";
import InputContainer from "@/src/components/molecules/InputContainer";
import FormContainer from "@/src/components/organisms/FormContainer";
import { setCookie } from "@/src/session/cookieActions";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignUpForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    async function cadastrar(){
        const res = await create<{ name: string, password: string }>('user', {
            name: username,
            password: password
        })
        if(res){
            await setCookie('id', res.id);
            router.push('/home')
        }
    }

    return (
        <FormContainer>
            <InputContainer title="Nome de usuário">
                <TextInput value={username} onInput={(e) => setUsername(e.target.value)}/>
            </InputContainer>
            <InputContainer title="Senha">
                <TextInput type="password" value={password} onInput={(e) => setPassword(e.target.value)} />
            </InputContainer>
            <Button text={"cadastrar"} onclick={() => cadastrar()} />
            <LinkButton text={"voltar à tela de login"} path={"/"} />
        </FormContainer>    
    );
};

export default SignUpForm