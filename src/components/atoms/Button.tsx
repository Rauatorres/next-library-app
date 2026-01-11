type ButtonProps = {
    type?: "submit";
    text: string;
};

const Button = ({ type, text }: ButtonProps) => {
    return (
        <button type={type == undefined ? "button" : type}>{text}</button>
    );
}

export default Button