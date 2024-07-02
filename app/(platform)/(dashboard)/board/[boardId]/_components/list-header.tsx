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

    const enableEditing = () => {
        setIsEditing(true);
    }

    const disableEditing = () => {
        setIsEditing(false);
    }

    const {execute, fieldErrors} = useAction(updateList, {
        onSuccess: data => {
            toast.success(`List "${data.title}" updated`)
            setTitle(data.title)
            disableEditing()
        },
        onError: error => {
            toast.error(error)
        }
    });

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

        execute({
            title,
            id,
            boardId,
        });
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
                    <button onClick={enableEditing}>
                        Edit list
                    </button>
                    {title}
                    
                </div>        

            )}
        </div>
    )
}