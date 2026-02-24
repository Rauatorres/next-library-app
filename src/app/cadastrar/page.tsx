import Button from "@/src/components/atoms/Button";
import TextInput from "@/src/components/atoms/TextInput";
import Box from "@/src/components/organisms/Box";
import Form from "@/src/features/Form";
import Text from "@/src/components/atoms/Text";
import LinkComponent from "@/src/components/atoms/LinkComponent";
import FormFieldContainer from "@/src/components/molecules/FormFieldContainer";
import FormSubTitle from "@/src/components/atoms/FormSubTitle";
import FormTitle from "@/src/components/atoms/FormTitle";
import InputLabelContainer from "@/src/components/molecules/InputLabelContainer";
import AlignedTextContainer from "@/src/components/molecules/AlignedTextContainer";

export default function Cadastrar() {
  return (
    <Form>
      <Box type="login-form">
        <FormFieldContainer>
          <FormTitle>Cadastrar</FormTitle>
          <FormSubTitle>
            Cadastre-se gratuitamente e organize a sua leitura
          </FormSubTitle>
        </FormFieldContainer>
        <FormFieldContainer>
          <InputLabelContainer title="Nome de usuário">
            <TextInput placeholder="Nome" marginY="sm" />
          </InputLabelContainer>
          <InputLabelContainer title="Senha">
            <TextInput placeholder="senha1234" type="password" marginY="sm" />
          </InputLabelContainer>
          <InputLabelContainer title="Confirmar Senha">
            <TextInput placeholder="senha1234" type="password" marginY="sm" />
          </InputLabelContainer>
        </FormFieldContainer>
        <FormFieldContainer>
          <Button text={"cadastrar"} color="primary" size="full" font="md" />
          <AlignedTextContainer marginY="sm" spaceX="sm">
            <Text text={"Já tem uma conta?"} size="sm" color="secondary" />
            <LinkComponent
              text={"Faça Login"}
              url={"/"}
              fontSize="md"
              type="main"
            />
          </AlignedTextContainer>
        </FormFieldContainer>
      </Box>
    </Form>
  );
}
