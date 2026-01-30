type TextInputProps = {
    id?: string;
    type?: "password";
    onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string
}

const TextInput = ({ id, type, onInput, value }: TextInputProps) => {
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
                rounded-xs
                focus:outline-0 focus:bg-(--focused-input-bg-color)
            "
            onInput={onInput}
            value={value ? value : ""}
        />
    );
};

export type { TextInputProps }

export default TextInput
