type TextInputProps = {
    id?: string;
    type?: "password";
}

const TextInput = ({ id, type }: TextInputProps) => {
    return (
        <input 
            id={id}
            type={ type == undefined ? "text" : type } 
            className="
                bg-(--default-input-bg-color)
                block
                w-full
                text-lg
                py-3 px-4
                focus:outline-0 focus:bg-(--focused-input-bg-color)
            "
        />
    );
};

export type { TextInputProps }

export default TextInput
