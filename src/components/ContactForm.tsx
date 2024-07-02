import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "./Input";
import contactInputFields from "../configs/formConfigs/contactInputFields";
import PhoneInput from "./PhoneInput";

const ContactForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>();

    const onSubmit: SubmitHandler<FieldValues> = (data): void => {
        console.log(data); // Logs the entire f
    };

    return (
        <div className="contact--form--container">
            <form className="contact--form" onSubmit={handleSubmit(onSubmit)}>
                {contactInputFields.map((field, index: number) => {
                    const { name, placeholder, rules } = field;
                    if (name === "phone") {
                        return (
                            <PhoneInput
                                key={index + name}
                                name={name}
                                placeholder={placeholder}
                                register={register}
                                rules={rules}
                                error={errors}
                            />
                        );
                    }
                    return (
                        <Input
                            key={index + name}
                            name={name}
                            placeholder={placeholder}
                            register={register}
                            rules={rules}
                            error={errors}
                        />
                    );
                })}
                <br />
                <button className="contact--form--button" type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
