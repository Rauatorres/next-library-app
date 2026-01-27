'use client'

import Button from "@/src/components/atoms/Button";
import TextInput from "@/src/components/atoms/TextInput";
import InputContainer from "@/src/components/molecules/InputContainer";
import FormContainer from "@/src/components/organisms/FormContainer";
import { useState } from "react";

const AddBookForm = ({ addFunction }: { addFunction: (requestObject: { type: string, name: string }) => void }) => {
    const [name, setName] = useState("");

    return (
        <FormContainer>
           <InputContainer title="Nome">
                <TextInput onInput={(e) => setName(e.target.value)} />
           </InputContainer> 
           <Button text={"adicionar"} onclick={() => addFunction({ type: 'add', name: name })} />
        </FormContainer>
    );
};

export default AddBookForm