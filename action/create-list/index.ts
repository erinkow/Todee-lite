"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

import { db } from "@/lib/db";

import { InputType, ReturnType } from "./types";
import { createSafeAction } from "@/lib/create-safe-action";
import { CreateList } from "./schema";

const handler = async (data: InputType): Promise<ReturnType> => {
    const { userId } = auth();

    if(!userId) {
        return{
            error: 'Unauthorised'
        }
    }

    const { title, boardId, expiryDate } = data;

    if(!title || title === '')  console.log('Title is not set');

    let list;

    try {
        const lastList = await db.list.findFirst({
            orderBy: { createdAt: 'desc' },
            select: { order: true },
        })

        const newOrder = lastList ? lastList.order + 1 : 1;
        list = await db.list.create({
            data: {
                title,
                boardId,
                expiryDate: expiryDate ? new Date(expiryDate) : null,
                order: newOrder,
            }
        });

    } catch (error) {
        return {
            error: 'Failed to create'
        }
    }

    revalidatePath(`/board/${userId}`)
    return{ data: list };
}

export const createList = createSafeAction(CreateList, handler);