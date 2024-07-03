"use client";

// import { ListItem } from "./list-item";
import { List } from "@prisma/client";
import { ListItem } from "./list-item";
import { ElementRef, useRef, useState } from "react";
import { ListForm } from "./list-form";
import { Plus } from "lucide-react";
import { useOnClickOutside } from "usehooks-ts";
import { Button } from "@/components/ui/button";
import { ListProvider, useListContext } from "./list-context";

interface ListContainerProps {
    data: List[];
}

export const ListContainer = ({data}: ListContainerProps) => {

    return(
        <ListProvider>
            <div>
                <Content data={data}/>
            </div>
        </ListProvider>
    )
}

const Content = ({data}: {data: List[]}) => {
    const {isEditing, enableEditing, disableEditing} = useListContext()
    return(

        <div className="w-full max-w-md p-4 shadow-lg rounded-lg h-[44rem] flex flex-col bg-neutral-100">
            <ol className="flex flex-col roun items-center justify-start overflow-y-auto flex-grow">
                <div>
                    {data?.map(item => (
                        <ListItem
                            key={item.id}
                            data={item}
                        />
                    ))}
                </div>
                <div className="flex-shrink-0 mt-4">
                    {isEditing ? (
                        <ListForm/>
                    ): (
                        <Button onClick={enableEditing} variant='ghost' className="flex items-center justify-center w-full">
                            <Plus className="w-4 h-4 mr-2"/> <span>Add List</span>
                        </Button>
                    )}
                </div>
            </ol>
        </div>
    )
}