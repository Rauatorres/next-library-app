"use client";

import { cloneElement, ReactElement, ReactNode, useId } from "react";
import { TextInputProps } from "../atoms/TextInput";

type InputLabelContainerProps = {
  children: ReactElement<TextInputProps>;
  title?: string;
};

const InputLabelContainer = ({ children, title }: InputLabelContainerProps) => {
  const inputId = useId();

  return (
    <label
      htmlFor={inputId}
      className="
      block
      my-5
    "
    >
      <h3
        className="
        text-xs font-medium
      "
      >
        {title}
      </h3>{" "}
      {cloneElement(children, { id: inputId })}
    </label>
  );
};

export default InputLabelContainer;
