import { ReactNode } from "react";
import { IconType } from "react-icons";

type InputWithIconProps = {
  children: ReactNode;
  icon: IconType;
};

const InputWithIcon = ({ children, icon: Icon }: InputWithIconProps) => {
  return (
    <div className="relative [&_input]:pr-10">
      {children}
      <Icon
        className="
        absolute
        right-3
        top-1/2
        -translate-y-1/2
        text-(--text-input-text-color) text-xl
      "
      />
    </div>
  );
};

export default InputWithIcon;
