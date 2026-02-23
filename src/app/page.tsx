import { MdPerson } from "react-icons/md";
import Button from "../components/atoms/Button";
import FormButtonSeparator from "../components/atoms/FormButtonSeparator";
import FormSubTitle from "../components/atoms/FormSubTitle";
import FormTitle from "../components/atoms/FormTitle";
import TextInput from "../components/atoms/TextInput";
import FormFieldContainer from "../components/molecules/FormFieldContainer";
import InputWithIcon from "../components/molecules/InputWithIcon";
import Box from "../components/organisms/Box";
import { IoLockClosed } from "react-icons/io5";

export default function Login() {
  return (
    <>
      <Box type="login-form">
        <FormFieldContainer>
          <FormTitle>Bem vindo à Biblioteca Virtual</FormTitle>
          <FormSubTitle>
            Faça login ou cadastre-se gratuitamente para acessar a sua
            biblioteca pessoal online
          </FormSubTitle>
        </FormFieldContainer>
        <FormFieldContainer>
          <InputWithIcon icon={MdPerson}>
            <TextInput placeholder="Nome de usuário" marginY="md" />
          </InputWithIcon>
          <InputWithIcon icon={IoLockClosed}>
            <TextInput type="password" placeholder="Senha" marginY="md" />
          </InputWithIcon>
        </FormFieldContainer>
        <FormFieldContainer>
          <Button text="login" color="primary" size="full" font="md" />
          <FormButtonSeparator />
          <Button text="cadastre-se" color="link" size="full" font="md" />
        </FormFieldContainer>
      </Box>
    </>
  );
}
