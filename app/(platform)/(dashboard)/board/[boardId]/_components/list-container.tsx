"use client";

// import { ListItem } from "./list-item";
import { List } from "@prisma/client";
import { ListItem } from "./list-item";
import { useState } from "react";
import { ListForm } from "./list-form";
import { Plus } from "lucide-react";

interface ListContainerProps {
    data: List[];
}

export const ListContainer = ({data}: ListContainerProps) => {
    const [isEditing, setIsEditing] = useState(false);

    const enableEditing = () => {
        setIsEditing(true)
    }

    const disableEditing = () => {
        setIsEditing(false);
    }

    return(
        <ol>
            {data?.map(item => (
                <ListItem
                    key={item.id}
                    data={item}
                    // isEditing={isEditing}
                    // enableEditing={enableEditing}
                    // disableEditing={disableEditing}
                />
            ))}
            {isEditing ? (
                <ListForm
                    // data={data}
                    isEditing={isEditing}
                    disableEditing={disableEditing}
                />
            ): (
                <button onClick={enableEditing}>
                    <Plus className="w-4 h-4 mr-2"/>
                    Add List
                </button>
            )}
        </ol>
    )
}