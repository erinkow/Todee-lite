import { z } from "zod";
import { List } from "@prisma/client";

import { CreateExpiryDate } from "./schema";
import { ActionState } from "@/lib/create-safe-action";

export type InputType = z.infer<typeof CreateExpiryDate>
export type ReturnType = ActionState<InputType, List>