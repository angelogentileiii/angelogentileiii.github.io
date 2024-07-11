import { InputHTMLAttributes } from "react";
import {
    FieldValues,
    FieldErrors,
    UseFormRegister,
    UseFormSetValue,
} from "react-hook-form";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    register: UseFormRegister<FieldValues>;
    rules?: {};
    error?: FieldErrors<FieldValues>;
}

export interface PhoneInputProps extends InputProps {
    setValue: UseFormSetValue<FieldValues>;
}
