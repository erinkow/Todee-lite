"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";

import { createSafeAction } from "@/lib/create-safe-action";
import { InputType, ReturnType } from "./types";
import { DeleteList } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
    const { userId } = auth();

    if(!userId) {
        return{
            error: 'Unauthorised'
        }
    }

    const {id, boardId} = data;
    let list;

    try {
        list = await db.list.delete({
            where: {
                id,
                boardId,
            },
        });
    } catch {
        return {
            error: 'Failed to delete'
        }
    }

    revalidatePath(`/board/${boardId}`)
    return{data: list}
}

export const deleteList = createSafeAction(DeleteList, handler);