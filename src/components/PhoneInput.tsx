import { useState } from "react";
import { InputProps } from "../types";

const PhoneInput: React.FC<InputProps> = ({
    name,
    register,
    placeholder,
    rules,
    error,
    ...rest
}) => {
    const [formattedValue, setFormattedValue] = useState("");
    const errorDetails = error && error[name];
    const errorMessage = errorDetails?.message;

    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let value = event.target.value;
        value = value.replace(/\D/g, ""); // Remove non-numeric characters
        value = value.replace(/^(\d{3})(\d)/g, "($1) $2"); // Format as (123) 4
        value = value.replace(/^(\d{3})(\d{3})(\d)/g, `($1) $2-$3`); // Format as (123) 456-7

        setFormattedValue(value);
    };

    return (
        <div className="input--block">
            <input
                className={error?.[name] ? "input-error" : name}
                placeholder={placeholder}
                {...register(name, rules)}
                value={formattedValue}
                onChange={handlePhoneChange}
            />
            {errorMessage && typeof errorMessage === "string" && (
                <span className="error-message">{errorMessage}</span>
            )}
        </div>
    );
};

export default PhoneInput;
