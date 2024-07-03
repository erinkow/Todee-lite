"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { UpdateExpiryDate } from "./schema";
import { InputType, ReturnType } from "./types";

const handler = async(data: InputType): Promise<ReturnType> => {
    const { userId } = auth();

    if(!userId) {
        return{
            error: 'Unauthorised'
        }
    }
    console.log('user is authorised')

    const {id, expiryDate, boardId} = data;
    let list;

    try {
        console.log('list is to update')
        list = await db.list.update({
            where: {
                id,
                boardId,
            },
            data: {
                expiryDate,
            }
        })
        console.log('list has been updated')
    } catch (error) {
        console.error('Error revalidating path', error)
        return {
            error: 'Failed to create'
        }
    }

    revalidatePath(`/board/${boardId}`)
    console.log('Returning data:', { data: list });
    return {data: list}
}

export const updateExpiryDate = createSafeAction(UpdateExpiryDate, handler)