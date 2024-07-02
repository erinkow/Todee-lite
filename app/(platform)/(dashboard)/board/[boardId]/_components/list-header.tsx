"use client"

import { toast } from "sonner";
import { useParams } from "next/navigation";
import { useEventListener } from "usehooks-ts";
import { ElementRef, useRef, useState } from "react";

import { List } from "@prisma/client"

import { ListForm } from "./list-form";
import { FormInput } from "@/components/form/form-input";
import { useAction } from "@/hooks/use-action";
import { updateList } from "@/action/update-list";
import { deleteList } from "@/action/delete-list";
import { FormSubmit } from "@/components/form/form-submit";

interface ListHeaderProps {
    data: List;
    // isEditing: boolean;
    // enableEditing: () => void;
    // disableEditing: () => void;
}

export const ListHeader = ({
    data,
    // isEditing,
    // enableEditing,
    // disableEditing
}:  ListHeaderProps
) => {
    const params = useParams();
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(data.title);
    const formRef = useRef<ElementRef<'form'>>(null);
    const inputRef = useRef<ElementRef<'input'>>(null);
    const closeRef = useRef<ElementRef<'form'>>(null);

    const enableEditing = () => {
        setIsEditing(true);
    }

    const disableEditing = () => {
        setIsEditing(false);
    }

    const {
        execute: executeUpdate,
        fieldErrors
    } = useAction(updateList, {
        onSuccess: data => {
            toast.success(`List "${data.title}" updated`)
            setTitle(data.title)
            disableEditing()
        },
        onError: error => {
            toast.error(error)
        }
    });

    const {
        execute: executeDelete,
    } = useAction(deleteList, {
        onSuccess: data => {
            toast.success(`List "${data.title}" deleted`)
            closeRef.current?.click();
        },
        onError: error => {
            toast.error(error)
        }
    })

    const onBlur = () => {
        formRef.current?.requestSubmit();
        console.log('onBlur was submitted')
    }

    const handleSubmit = (formData: FormData) => {
        const title = formData.get('title') as string;
        const id = formData.get('id') as string;
        const boardId = params.boardId as string;

        console.log("Submitting form data:", { title, id, boardId });

        if(title === data.title) {
            return disableEditing();
            console.log('title was same')
        }

        executeUpdate({
            title,
            id,
            boardId,
        });
    }

    const handleDelete = (formData: FormData) => {
        const id = formData.get('id') as string;
        const boardId = formData.get('boardId') as string;

        executeDelete({
            id,
            boardId,
        })
    }

    const onKeyDown = (e: KeyboardEvent) => {
        if(e.key === 'Escape') {
            formRef.current?.requestSubmit();
        }
        console.log('onKeyDown was conducted')
    }

    useEventListener('keydown', onKeyDown);

    return(
        <div>
            {isEditing ? (
                <form 
                    action={handleSubmit}
                    ref={formRef}
                >
                    <input hidden id="id" name="id" value={data.id}/>
                    <input hidden id="boardId" name="boardId" value={data.boardId} />
                    <FormInput
                        ref={inputRef}
                        onBlur={onBlur}
                        id='title'
                        placeholder='Enter list title...'
                        defaultValue={title}
                        errors={fieldErrors}
                        name='title'
                    />
                    <button type="submit" hidden/>
                </form>
            ) : (
                <div>
                    {title}
                    <button onClick={enableEditing}>
                        Edit list
                    </button>
                    <form action={handleDelete} ref={closeRef}>
                        <input hidden id="id" name="id" value={data.id} />
                        <input hidden id="boardId" name="boardId" value={data.boardId}/>
                        <FormSubmit
                            variant="ghost"
                            className="rounded-none w-full h-auto p-2 px-5 justify-start font-normal text-sm"
                        >
                            Delete this list...
                        </FormSubmit>
                    </form>
                    
                </div>        

            )}
        </div>
    )
}