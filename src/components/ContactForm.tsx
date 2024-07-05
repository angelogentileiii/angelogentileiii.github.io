import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "./Input";
import contactInputFields from "../configs/formConfigs/contactInputFields";
import CustomPhoneInput from "./PhoneInput";
import EmailAction from "../configs/email/EmailAction";
// import { ContactFormData } from "../types";

const ContactForm: React.FC = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>();

    const onSubmit: SubmitHandler<FieldValues> = (data: FieldValues): void => {
        console.log(data); // Logs the entire form data
        EmailAction(data);
    };

    return (
        <div className="contact--form--container">
            <form className="contact--form" onSubmit={handleSubmit(onSubmit)}>
                {contactInputFields.map((input, index: number) => {
                    const { name, placeholder, rules } = input;
                    if (name === "phone") {
                        return (
                            <div key={index + name}>
                                <CustomPhoneInput
                                    key={index + name}
                                    name={name}
                                    placeholder={placeholder}
                                    register={control.register}
                                    rules={rules}
                                    error={errors}
                                />
                            </div>
                        );
                    }
                    return (
                        <Input
                            key={index + name}
                            name={name}
                            placeholder={placeholder}
                            register={control.register}
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
