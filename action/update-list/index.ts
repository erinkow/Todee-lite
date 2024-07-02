"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs/server";

import { db } from "@/lib/db";

import { createSafeAction } from "@/lib/create-safe-action";
import { InputType, ReturnType } from "./types";
import { UpdateList } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
    const { userId } = auth();

    if(!userId) {
        console.log('Unauthorised: no userId found')
        return{
            error: 'Unauthorised'
        }
    }

    const {id, title, boardId} = data;
    let list;

    try{
        console.log('Attempting to update list with id;',id, 'and boardId', boardId);
        list = await db.list.update({
            where: {
                id,
                boardId,
            },
            data: {
                title,
            }
        });
        console.log('list updated successfully', list)
    } catch(error) {
        console.log('Error updating list:', error)
        return{
            error: 'Failed to update'
        }
    }
    try {
        revalidatePath(`/board/${boardId}`)
    } catch (revalidateError) {
        console.log('Error revalidating path', revalidateError)
        return {error: 'Failed to revalidate path'}
    }
    return{ data: list };
}

export const updateList = createSafeAction(UpdateList, handler);