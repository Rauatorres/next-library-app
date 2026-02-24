type TextProps = {
  text: string;
  size?: "sm";
  color?: "secondary";
};

const Text = ({ text, size, color }: TextProps) => {
  let style: string = "";

  switch (size) {
    case "sm":
      style += "text-sm ";
  }

  switch (color) {
    case "secondary":
      style += "text-(--secondary-text-color)";
  }

  return <p className={`${style}`}>{text}</p>;
};

export default Text;
