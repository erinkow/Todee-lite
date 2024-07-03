"use client;"

import { FormInput } from "@/components/form/form-input"
import { List } from "@prisma/client";
import { ElementRef, useRef, useState } from "react"
import { ListHeader } from "./list-header";
import { useAction } from "@/hooks/use-action";
import { createSafeAction } from "@/lib/create-safe-action";
import { createList } from "@/action/create-list";
import { toast } from "sonner";
import { ListForm } from "./list-form";

interface ListItemProps {
    data: List;
    // isEditing: boolean;
    // enableEditing: () => void;
    // disableEditing: () => void;
}

export const ListItem = ({
    data,
    // isEditing,
    // enableEditing,
    // disableEditing
}: ListItemProps) => {

    return(
        <li 
            key={data.id}
            className="shrink-0 h-auto w-[272px] select-none mb-3 bg-neutral-50 border-none shadow-lg"
        >
            <div className="">
                <ListHeader
                    data={data}
                    // isEditing={isEditing}
                    // enableEditing={enableEditing}
                    // disableEditing={disableEditing}
                />
            </div>
        </li>
    )
}