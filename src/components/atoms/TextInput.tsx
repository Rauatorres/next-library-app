type TextInputProps = {
    id?: string;
    type?: "password";
}

const TextInput = ({ id, type }: TextInputProps) => {
    return (
        <input 
            id={id}
            type={ type == undefined ? "text" : type } 
            className="bg-neutral-400"
        />
    );
};

export type { TextInputProps }

export default TextInput
