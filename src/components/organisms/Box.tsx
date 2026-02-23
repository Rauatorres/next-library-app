import { ReactNode } from "react";

type BoxProps = {
  children: ReactNode;
  type?: "login-form";
};

const Box = ({ children, type }: BoxProps) => {
  let style: string;
  switch (type) {
    case "login-form":
      style = `
        w-[28rem]
        mx-auto my-[4rem]
        shadow-xl
        px-[3.5rem] py-[5rem]
        space-y-15
      `;
      break;
    default:
      style = `
        w-fit
      `;
  }
  return (
    <div
      className={`
      bg-(--main-box-bg-color) 
      rounded-xl
      ${style}`}
    >
      {children}
    </div>
  );
};

export default Box;
