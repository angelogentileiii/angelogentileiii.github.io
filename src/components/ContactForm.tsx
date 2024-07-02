import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "./Input";

const ContactForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>();

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data); // Logs the entire f
    };

    return (
        <div className="contact--form--container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    name="firstName"
                    placeholder="First Name"
                    register={register}
                    rules={{
                        required: "A valid first name is required.",
                        maxLength: 20,
                        pattern: {
                            value: /^[A-Za-z]+$/i,
                            message:
                                "First name must only contain alphabetical letters.",
                        },
                    }}
                    error={errors}
                />
                <Input
                    name="lastName"
                    placeholder="Last Name"
                    register={register}
                    rules={{
                        required: "A valid last name is required.",
                        maxLength: 20,
                        pattern: {
                            value: /^[A-Za-z]+$/i,
                            message:
                                "Last name must only contain alphabetical letters.",
                        },
                    }}
                    error={errors}
                />
                <Input
                    name="email"
                    placeholder="Email"
                    register={register}
                    rules={{ required: "A valid email is required." }}
                    error={errors}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;
