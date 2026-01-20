import Link from "next/link"

type LinkButtonProps = {
    text: string;
    path: string;
}

const LinkButton = ({ text, path }: LinkButtonProps) => {
    return (
        <Link className="
            block
        " href={path}>{text}</Link>
    );
};

export default LinkButton