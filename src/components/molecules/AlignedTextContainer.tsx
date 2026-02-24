import { ReactNode } from "react";

type AlignedTextContainerProps = {
  children: ReactNode;
  marginY?: "sm";
  spaceX?: "sm";
};

const AlignedTextContainer = ({
  children,
  marginY,
  spaceX,
}: AlignedTextContainerProps) => {
  let style: string = "";

  switch (marginY) {
    case "sm":
      style += "my-6 ";
      break;
  }

  switch (spaceX) {
    case "sm":
      style += "space-x-2 ";
  }

  return <div className={`flex ${style}`}>{children}</div>;
};

export default AlignedTextContainer;
