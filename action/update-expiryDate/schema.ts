import { z } from "zod";

export const UpdateExpiryDate = z.object({
    title: z.string({
        required_error: 'Title is required',
        invalid_type_error: 'Title is required',
    }).max(15, {
        message: 'Title must be within 15 letters'
    }).optional(),
    id: z.string(),
    boardId: z.string().optional(),
    expiryDate: z.string().optional(),
})