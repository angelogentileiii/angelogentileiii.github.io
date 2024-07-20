import { InputProps } from "../../../types/index.types";

export const TextArea: React.FC<InputProps> = ({
    name,
    register,
    rules,
    error,
    onChange,
    ...rest
}) => {
    const errorDetails = error && error[name];
    const errorMessage = errorDetails?.message;
    const inputClasses = error?.[name] ? `input-error ${name}` : name;

    return (
        <div className="w-full rounded-md">
            <textarea
                className={`w-full px-4 py-2 bg-slate-100 shadow-inner border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-amber-600 ${inputClasses} h-36 overflow-y-auto`}
                {...register(name, rules)}
                {...rest}
                onChange={onChange}
            />
            {errorMessage && typeof errorMessage === "string" && (
                <span className="error-message">{errorMessage}</span>
            )}
        </div>
    );
};
