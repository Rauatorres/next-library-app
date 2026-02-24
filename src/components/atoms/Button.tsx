"use client";

type ButtonProps = {
  text: string;
  type?: "button" | "submit";
  color?: "primary" | "link";
  size?: "full";
  font?: "md";
  onClick?: () => void;
};

const Button = ({ text, type, color, size, font, onClick }: ButtonProps) => {
  let style: string = "";

  if (type == undefined) {
    type = "button";
  }

  switch (color) {
    case "primary":
      style += ` bg-(--form-primary-button-bg-color) text-white font-semibold`;
      break;
    case "link":
      style += ` text-(--form-link-button-text-color) outline-2 outline-(--form-link-button-border-color) outline-offset-[-2px]`;
      break;
  }

  switch (size) {
    case "full":
      style += " w-full ";
  }

  switch (font) {
    case "md":
      style += `text-sm py-3.5 `;
    default:
      style += `py-1`;
  }

  return (
    <button
      className={` cursor-pointer rounded-xl block px-2  ${style} `}
      type={type}
      onClick={() => (onClick != undefined ? onClick() : 0)}
    >
      {text}
    </button>
  );
};

export default Button;
