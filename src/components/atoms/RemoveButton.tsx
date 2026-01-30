const RemoveButton = ({ onClick }: { onClick?: () => void }) => {
    return (
        <button onClick={onClick}>remover</button>
    );
};

export default RemoveButton