"use client"

import { toast } from "sonner";
import { useParams } from "next/navigation";
import { useEventListener, useOnClickOutside } from "usehooks-ts";
import { ElementRef, useRef, useState } from "react";

import { List } from "@prisma/client"

import { FormInput } from "@/components/form/form-input";
import { useAction } from "@/hooks/use-action";
import { updateList } from "@/action/update-list";
import { deleteList } from "@/action/delete-list";
import { FormSubmit } from "@/components/form/form-submit";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { ListExpiration } from "./list-expiration";

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

    useOnClickOutside(formRef, () => formRef.current?.requestSubmit())
    useEventListener('keydown', onKeyDown);

    return(
        <div className="rounded-md m-3 p-2 flex flex-col justify-between h-full">
            <div className={`flex flex-row justify-between items-center ${isEditing ? 'editing-mode' : ''}`}>
                {isEditing ? (
                    <form 
                        action={handleSubmit}
                        ref={formRef}
                        className="rounded-md flex-1 px-[2px] m-3"
                    >
                        <input hidden id="id" name="id" value={data.id} readOnly/>
                        <input hidden id="boardId" name="boardId" value={data.boardId} readOnly/>
                        <FormInput
                            ref={inputRef}
                            onBlur={onBlur}
                            id='title'
                            placeholder='Enter list title...'
                            defaultValue={title}
                            errors={fieldErrors}
                            name='title'
                            className="text-md font-bold px-[7px] border-transparent  transition truncate bg-transparent focus:bg-white"
                        />
                        <button type="submit" hidden/>
                    </form>
                ) : (
                    <>
                        <label className="flex rounded-lg justify-center font-bold items-center m-3 cursor-pointer hover:bg-accent hover:text-accent-foreground" onClick={enableEditing}>
                            <h1 className="ml-2" onClick={enableEditing}>{title}</h1>
                            <Button 
                                
                                className='rounded-none w-auto h-auto py-2 px-5 justify-start font-normal text-sm'
                                variant='ghost'
                            >
                                <Pencil className="w-4 h-4 mx-2"/>
                            </Button>
                        </label>
                    </>
                )}
     
            </div>        
                <div className="flex flex-row justify-around mt-auto">
                    <ListExpiration data={data}/>
                    <form action={handleDelete} ref={closeRef} className="flex items-center">
                        <input hidden id="id" name="id" value={data.id} readOnly/>
                        <input hidden id="boardId" name="boardId" value={data.boardId} readOnly/>
                        <FormSubmit
                            variant="ghost"
                            className="rounded-none w-auto h-auto py-2 px-5 font-normal text-sm"
                        >
                            <Trash2 className="w-4 h-4 mx-2"/>
                        </FormSubmit>
                    </form>

                </div>
        </div>
    )
}