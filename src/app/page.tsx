import Button from "../components/atoms/Button";
import FormButtonSeparator from "../components/atoms/FormButtonSeparator";
import FormSubTitle from "../components/atoms/FormSubTitle";
import FormTitle from "../components/atoms/FormTitle";
import TextInput from "../components/atoms/TextInput";
import FormFieldContainer from "../components/molecules/FormFieldContainer";
import Box from "../components/organisms/Box";

export default function Login() {
  return (
    <>
      <Box>
        <FormFieldContainer>
          <FormTitle>Bem vindo à Biblioteca Virtual</FormTitle>
          <FormSubTitle>
            Faça login ou cadastre-se gratuitamente para acessar a sua
            biblioteca pessoal online
          </FormSubTitle>
        </FormFieldContainer>
        <FormFieldContainer>
          <TextInput placeholder="Nome de usuário" />
          <TextInput placeholder="Senha" />
        </FormFieldContainer>
        <FormFieldContainer>
          <Button text="login" />
          <FormButtonSeparator />
          <Button text="cadastre-se" />
        </FormFieldContainer>
      </Box>
    </>
  );
}
