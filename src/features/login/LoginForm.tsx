'use client'

import { useMutation } from "@tanstack/react-query";
import { getOneByContent } from "../../api/queries";
import Button from "../../components/atoms/Button";
import LinkButton from "../../components/atoms/LinkButton";
import TextInput from "../../components/atoms/TextInput";
import InputContainer from "../../components/molecules/InputContainer";
import FormContainer from "../../components/organisms/FormContainer";
import { useRouter } from "next/navigation";
import { setCookie } from "../../session/cookieActions";

const LoginForm = () => {
    const router = useRouter();

    const mutation = useMutation({ 
        mutationKey: ['login'],
        mutationFn: async () => {
            try{
                const res = await getOneByContent<{ name: string, password: string }>('user/login', { name: 'teste', password: '123' })
                await setCookie('id', res.id);
                await setCookie('name', res.name);
                router.push('/home');
            }catch (err){

                console.log(err);
            }
        },
    });

    return (
        <FormContainer>
            <InputContainer title="Usuário">
                <TextInput />
            </InputContainer>
            <InputContainer title="Senha">
                <TextInput type="password" />
            </InputContainer>
            <Button type="submit" text="entrar" onclick={() => mutation.mutate()} />
            <LinkButton text="cadastrar" path="cadastrar"/>
        </FormContainer>
    );
};

export default LoginForm