import Button from "@/src/components/atoms/Button";
import TextInput from "@/src/components/atoms/TextInput";
import InputContainer from "@/src/components/molecules/InputContainer";
import FormContainer from "@/src/components/organisms/FormContainer";
import Book from "@/src/interfaces/Books";

const AddBookForm = ({ addFunction }: { addFunction: () => void }) => {
    return (
        <FormContainer>
           <InputContainer title="Nome">
                <TextInput />
           </InputContainer> 
           <Button text={"adicionar"} onclick={addFunction} />
        </FormContainer>
    );
};

export default AddBookForm