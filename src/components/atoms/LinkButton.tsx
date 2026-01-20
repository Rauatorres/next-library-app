import Link from "next/link"

type LinkButtonProps = {
    text: string;
    path: string;
}

const LinkButton = ({ text, path }: LinkButtonProps) => {
    return (
        <Link className="
            block
            border-2 border-black
            text-center text-lg
            mt-7
            p-2
            rounded-md
        " href={path}>{text}</Link>
    );
};

export default LinkButton