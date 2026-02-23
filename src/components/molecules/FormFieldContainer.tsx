import { ReactNode } from "react";

type FormFieldContainerProps = {
  children: ReactNode;
};

const FormFieldContainer = ({ children }: FormFieldContainerProps) => {
  return <div>{children}</div>;
};

export default FormFieldContainer;
