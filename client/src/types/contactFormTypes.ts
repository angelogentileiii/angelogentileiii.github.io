import { InputHTMLAttributes } from "react";
import { FieldValues, FieldErrors, UseFormRegister } from "react-hook-form";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    register: UseFormRegister<FieldValues>;
    rules?: {};
    error?: FieldErrors<FieldValues>;
}

export interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    message?: string;
}
