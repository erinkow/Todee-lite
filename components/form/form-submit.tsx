"use client";

import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FormSubmitProps {
    disabled?: boolean;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "primary";
    className?: string;
    children: React.ReactNode;
}

export const FormSubmit = ({
    disabled,
    variant,
    className,
    children,
}: FormSubmitProps) => {
    const { pending } = useFormStatus();
    return(
        <Button
            disabled={pending || disabled}
            type="submit"
            variant={variant}
            size="sm"
            className={cn(className)}
        >
            {children}
        </Button>
    )
}