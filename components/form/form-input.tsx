"use client"

import { forwardRef } from "react";
import { useFormStatus } from "react-dom";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { FormErrors } from "./form-errors";

interface FormInputProps {
    id?: string;
    label?: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    errors?: Record<string, string[] | undefined>;
    className?: string;
    defaultValue?: string;
    onBlur?: () => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>((
    {
        id,
        label,
        type,
        placeholder,
        required,
        disabled,
        errors,
        className,
        defaultValue = '',
        onBlur,
        onChange,
        name,
    }, ref
) => {
    const {pending} = useFormStatus();
    return(

        <div>
            <div>
                {label 
                    ? <Label>{label}</Label>
                    : null
                }
                <Input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    required={required}
                    disabled={pending || disabled}
                    className={cn('text-sm px-2 py-1 h-7', className,)}
                    defaultValue={defaultValue}
                    onBlur={onBlur}
                    aria-describedby={`${id}-error`}
                    ref={ref}
                    onChange={onChange}
                    name={name}
                />
            </div>
            <FormErrors
                id={id as string}
                errors={errors}
            />
        </div>
    );
});

FormInput.displayName = 'FormInput';