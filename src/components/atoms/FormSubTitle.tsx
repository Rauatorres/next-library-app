import { ReactNode } from "react";

const FormSubTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h2
      className="
    text-(--form-subtitle-color) text-center text-xs
    w-[80%]
    mx-auto my-3
  "
    >
      {children}
    </h2>
  );
};

export default FormSubTitle;
