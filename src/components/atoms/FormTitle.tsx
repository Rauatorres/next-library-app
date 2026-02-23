import { ReactNode } from "react";

const FormTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h1
      className="
    font-bold text-xl text-center
    mx-auto
  "
    >
      {children}
    </h1>
  );
};

export default FormTitle;
