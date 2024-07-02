"use client";

import { createList } from "@/action/create-list";
import { FormInput } from "@/components/form/form-input";
import { FormSubmit } from "@/components/form/form-submit";
import { Button } from "@/components/ui/button";
import { useAction } from "@/hooks/use-action";
import { List } from "@prisma/client";
import { Plus, X } from "lucide-react";
import { useParams } from "next/navigation";
import { ElementRef, useRef, useState } from "react";
import { toast } from "sonner";

interface ListFormProps {
    // data: List
    isEditing: boolean;
    // enableEditing: () => void;
    disableEditing: () => void;
}

export const ListForm = ({
    // data,
    isEditing,
    // enableEditing,
    disableEditing,
}: ListFormProps) => {
    const params = useParams();

    const [title, setTitle] = useState('');

    const formRef = useRef<ElementRef<'form'>>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const {execute, fieldErrors} = useAction(createList, {
        onSuccess: data => {
            toast.success(`List ${data.title} created`)
            disableEditing();
        },
        onError: error => {
            toast.error(error);
        },
    });

    // const enableEditing = () => {
    //     setIsEditing(true)
    // }

    // const disableEditing = () => {
    //     setIsEditing(false);
    // }

    const onSubmit = () => {
        // const id = formData.get('id') as string;
        // const title = formData.get('title') as string;
        const boardId = params.boardId as string;

        execute({
            title,
            boardId
        })
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    if(isEditing) {
        return(
            <form 
                action={onSubmit}
                ref={formRef}
            >
                <FormInput
                    ref={inputRef}
                    onChange={onChange}
                    placeholder="Enter a title..."
                    
                />
                <input 
                    hidden 
                    value={params.boardId}
                    name="boardId"
                />
                <input 
                    hidden 
                    name="title"
                    value={title}
                />
                <div className="flex items-center gap-x-1">
                    <FormSubmit>
                        Add list
                    </FormSubmit>
                    <Button
                        size='sm'
                        onClick={disableEditing}
                    >
                        <X className="w-4 h-4 mr-2"/>
                    </Button>
                </div>
            </form>
        )
    }
    return null;
    // return(
    //     <button
    //         onClick={enableEditing}
    //     >
    //         <Plus className="h-4 w-4 mr-2"/>
    //         Add list
    //     </button>
    // )
}