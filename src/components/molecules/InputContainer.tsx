'use client'

import React, { ReactElement } from "react";
import { useId } from "react";
import { TextInputProps } from "../atoms/TextInput";

type InputContainerType = {
    children: ReactElement<TextInputProps>,
    title?: string,
}

const InputContainer = ({ children, title }: InputContainerType) => {
    const id = useId();

    return (
        <label className="
            block
            w-full
            mb-5
        " htmlFor={id}>
            <h3 className="
                text-lg font-bold
                mb-3
            ">{title}</h3>
            {React.cloneElement(children, { id: id })}
        </label>
    );
};

export default InputContainer