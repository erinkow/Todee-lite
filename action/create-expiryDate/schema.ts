import { z } from "zod";

export const CreateExpiryDate = z.object({
    boardId: z.string(),
    expiryDate: z.string().optional(),
})