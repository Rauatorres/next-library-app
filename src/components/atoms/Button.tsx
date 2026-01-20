'use client'

type ButtonProps = {
    type?: "submit";
    text: string;
    onclick?: () => void;
};

const Button = ({ type, text, onclick }: ButtonProps) => {
    return (
        <button className="
            block
            bg-(--primary-bg-color) text-white active:bg-(--primary-active-bg-color) transition-colors duration-100
            w-full
            p-3
            text-xl
            mt-10
            rounded-sm
            cursor-pointer
        " type={type == undefined ? "button" : type} onClick={() => {
            if(onclick != undefined){
                onclick();
            }
        }
        }>{text}</button>
    );
}

export default Button