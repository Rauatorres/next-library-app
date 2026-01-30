'use client'

import EditButton from "@/src/components/atoms/EditButton";
import RemoveButton from "@/src/components/atoms/RemoveButton";
import TextInput from "@/src/components/atoms/TextInput";
import BookType from "@/src/interfaces/Books";
import { useState } from "react";

type BookProps = {
    name: string
    removeFunction: () => unknown,
    editFunction: (book: BookType) => unknown,
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
                        await editFunction({ title: editName });
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