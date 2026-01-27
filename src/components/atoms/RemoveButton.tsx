const RemoveButton = ({ onClick }: { onClick?: () => void }) => {
    return (
        <button onClick={onClick}>-</button>
    );
};

export default RemoveButton