'use client'

import { getOneByContent } from "../../api/queries";
import Button from "../../components/atoms/Button";
import LinkButton from "../../components/atoms/LinkButton";
import TextInput from "../../components/atoms/TextInput";
import InputContainer from "../../components/molecules/InputContainer";
import FormContainer from "../../components/organisms/FormContainer";
import { useRouter } from "next/navigation";
import { setCookie } from "../../session/cookieActions";
import { useState } from "react";

const LoginForm = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    async function login(){
        const res = await getOneByContent<{ name: string, password: string }>('user/login', { name: name, password: password })
        await setCookie('id', res.id);
        router.push('/home');
    }

    return (
        <FormContainer>
            <InputContainer title="Usuário">
                <TextInput onInput={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} />
            </InputContainer>
            <InputContainer title="Senha">
                <TextInput type="password" onInput={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}/>
            </InputContainer>
            <Button type="submit" text="entrar" onclick={async () => await login()} />
            <LinkButton text="cadastrar" path="cadastrar"/>
        </FormContainer>
    );
};

export default LoginForm