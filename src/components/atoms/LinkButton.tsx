import Link from "next/link"

type LinkButtonProps = {
    text: string;
}

const LinkButton = ({ text }: LinkButtonProps) => {
    return (
        <Link href={""}>{text}</Link>
    );
};

export default LinkButton