import { z } from "zod"

export type FieldErrors<T> = {
    [K in keyof T]?: string[];
}

export type ActionState<TInput, TOutput> = {
    fieldErrors?: FieldErrors<TInput>;
    error?: string | null;
    data?: TOutput;
}

export const createSafeAction = <TInput, TOutput>(
    schema: z.Schema<TInput>,
    handler: (validatedData: TInput) => Promise<ActionState<TInput, TOutput>>
) => {
    return async(data: TInput): Promise<ActionState<TInput, TOutput>> => {
        
        const validationResult =  schema.safeParse(data);
        console.log(validationResult);
        
        if(!validationResult.success) {
            return {
                fieldErrors: validationResult.error.flatten().fieldErrors as FieldErrors<TInput>,
            }
        } else {
            console.log('successed validation!')
        }

        return handler(validationResult.data)
    }
}