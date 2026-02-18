import { ReactNode } from "react";

const Box = ({ children }: { children: ReactNode }) => {
  return <div className="bg-(--main-box-bg-color)">{children}</div>;
};

export default Box;
