'use client'

import Button from "@/src/components/atoms/Button";
import TextInput from "@/src/components/atoms/TextInput";
import InputContainer from "@/src/components/molecules/InputContainer";
import FormContainer from "@/src/components/organisms/FormContainer";
import Book from "@/src/interfaces/Books";
import { useState } from "react";

const AddBookForm = ({ addFunction }: { addFunction: (requestObject: { type: string, book: Book }) => void }) => {
    const [title, setTitle] = useState("");

    return (
        <FormContainer>
           <InputContainer title="Nome">
                <TextInput onInput={(e) => setTitle(e.target.value)} value={title}/>
           </InputContainer> 
           <Button text={"adicionar"} onclick={() => addFunction({ type: 'add', book: { title: title } })} />
        </FormContainer>
    );
};

export default AddBookForm