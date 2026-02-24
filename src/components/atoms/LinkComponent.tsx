import Link from "next/link";

type LinkComponentProps = {
  text: string;
  url: string;
  fontSize?: "sm" | "md";
  type?: "main";
};

const LinkComponent = ({ text, url, fontSize, type }: LinkComponentProps) => {
  let style: string = "";

  switch (fontSize) {
    case "md":
      style += "text-sm ";
  }

  switch (type) {
    case "main":
      style += "text-black underline underline-offset-8 font-bold";
  }

  return (
    <Link className={`${style}`} href={url}>
      {text}
    </Link>
  );
};

export default LinkComponent;
