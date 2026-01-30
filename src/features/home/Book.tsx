'use client'

import EditButton from "@/src/components/atoms/EditButton";
import RemoveButton from "@/src/components/atoms/RemoveButton";
import TextInput from "@/src/components/atoms/TextInput";
import { useState } from "react";

type BookProps = {
    name: string
    removeFunction: () => unknown,
    editFunction: (name: string) => unknown,
}

const Book = ({ name, removeFunction, editFunction }: BookProps) => {
    const [isEditMode, setEditMode] = useState(false);
    const [editName, setEditName] = useState(name)

    return (
        <div>
            {
                isEditMode ? 
                <>
                    <TextInput value={editName} onInput={(e) => setEditName(e.target.value)}/>
                    <EditButton onClick={async () => {
                        console.log(await editFunction(editName));
                        setEditMode(false);
                        setEditName(name);
                    }}/>
                </> : 
                <>
                    {name} 
                    <RemoveButton onClick={() => removeFunction()} /> 
                    <EditButton onClick={() => setEditMode(true)} />
                </>
            }
        </div>
    );
};

export default Book