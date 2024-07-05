import { InputProps } from "../types";

const Input: React.FC<InputProps> = ({
    name,
    register,
    rules,
    error,
    ...rest
}) => {
    const errorDetails = error && error[name];
    const errorMessage = errorDetails?.message;

    return (
        <div className="input--block">
            <input
                className={error?.[name] ? `input-error ${name}` : name}
                {...register(name, rules)}
                {...rest}
            />
            {errorMessage && typeof errorMessage === "string" && (
                <span className="error-message">{errorMessage}</span>
            )}
        </div>
    );
};

export default Input;
