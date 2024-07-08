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

export interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    message?: string;
}

export interface PhoneInputProps extends InputProps {
    setValue: UseFormSetValue<FieldValues>;
}

interface EmailSuccess {
    success: true;
    successMessage: string;
}

interface EmailFail {
    success: false;
    errors: {
        message: string;
    };
}

export type EmailReturnType = EmailSuccess | EmailFail;
