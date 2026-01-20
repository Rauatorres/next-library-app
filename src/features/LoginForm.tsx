import Button from "../components/atoms/Button";
import LinkButton from "../components/atoms/LinkButton";
import TextInput from "../components/atoms/TextInput";
import InputContainer from "../components/molecules/InputContainer";
import FormContainer from "../components/organisms/FormContainer";

const LoginForm = () => {
    return (
        <FormContainer>
            <InputContainer title="Usuário">
                <TextInput />
            </InputContainer>
            <InputContainer title="Senha">
                <TextInput type="password" />
            </InputContainer>
            <Button type="submit" text="entrar" />
            <LinkButton text="cadastrar" path="cadastrar"/>
        </FormContainer>
    );
};

export default LoginForm