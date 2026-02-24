type TextInputProps = {
  type?: "text" | "password";
  placeholder?: string;
  marginY?: "sm" | "md";
  id?: string;
};

const TextInput = ({ type, placeholder, marginY }: TextInputProps) => {
  let style: string = "";

  if (type == undefined) {
    type = "text";
  }

  switch (marginY) {
    case "sm":
      style += "my-3";
      break;
    case "md":
      style += " my-7 ";
      break;
  }

  return (
    <input
      className={`
    bg-(--text-input-bg-color)
    border-2 border-(--text-input-border-color)
    box-border
    w-full
    block
    text-xs text-(--text-input-text-color)
    py-3 px-5
    rounded-xl
    focus:outline-none focus:ring-0 focus:bg-(--text-input-focus-bg-color)
    ${style}
  `}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default TextInput;

export type { TextInputProps };
