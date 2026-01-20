type ButtonProps = {
    type?: "submit";
    text: string;
};

const Button = ({ type, text }: ButtonProps) => {
    return (
        <button className="
            block
            bg-(--primary-bg-color) text-white
            w-full
            p-3
            text-xl
            mt-10
            rounded-sm
            cursor-pointer
        " type={type == undefined ? "button" : type}>{text}</button>
    );
}

export default Button