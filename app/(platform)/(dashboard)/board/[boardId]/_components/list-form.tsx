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
import { useOnClickOutside } from "usehooks-ts";
import { useListContext } from "./list-context";

// interface ListFormProps {
//     // data: List
//     isEditing: boolean;
//     // enableEditing: () => void;
//     disableEditing: () => void;
// }

export const ListForm = (
    // // data,
    // isEditing,
    // // enableEditing,
    // disableEditing,
) => {
    const params = useParams();

    const [title, setTitle] = useState('');
    const {isEditing, disableEditing} = useListContext();

    const formRef = useRef<ElementRef<'form'>>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const closeRef = useRef<ElementRef<'div'>>(null);

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
        if(!title) {
            return {
                error: 'Title is empty'
            }
        }
        execute({
            title,
            boardId
        })
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    }

    // useOnClickOutside(closeRef, () => disableEditing())

    if(isEditing) {
        return(
            <form 
                action={onSubmit}
                ref={formRef}
                className="flex flex-col items-center p-4 "
            >
                <FormInput
                    ref={inputRef}
                    onChange={onChange}
                    placeholder="Enter a title..."
                    defaultValue={title}
                    errors={fieldErrors}
                    className='border rounded-sm text-sm py-5 h-full w-full font-medium border-transparent hover:border-input focus:border-input transition truncate bg-transparent focus:bg-white'
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
                <div className="flex items-center gap-x-3 " ref={closeRef}>
                    <FormSubmit variant="ghost" className="text-neutral-800 mt-1">
                        Submit
                    </FormSubmit>
                    <Button
                        size='sm'
                        onClick={disableEditing}
                        variant='ghost'
                    >
                        <X className="w-4 h-4 mr-2 text-neutral-800"/>
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