import { InputProps } from "../../../types/index.types";
import { ChangeEventHandler } from "react";

export const Input: React.FC<InputProps> = ({
    name,
    register,
    rules,
    error,
    ...rest
}) => {
    const errorDetails = error && error[name];
    const errorMessage = errorDetails?.message;
    const inputClasses = error?.[name] ? `input-error ${name}` : name;

    return (
        <div className="mb-4 w-full rounded-md">
            <input
                type="text" // Set the type to "text" or appropriate input type
                className={`w-full px-4 py-2 bg-slate-100 shadow-inner border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600 ${inputClasses}`}
                {...register(name, rules)}
                {...rest}
            />
            {errorMessage && typeof errorMessage === "string" && (
                <span className="error-message">{errorMessage}</span>
            )}
        </div>
    );
};
