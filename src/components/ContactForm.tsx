import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "./Input";
import contactInputFields from "../configs/formConfigs/contactInputFields";
import CustomPhoneInput from "./PhoneInput";
import EmailAction from "../actions/email/EmailAction";
import {
    GoogleReCaptchaProvider,
    useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

const ContactForm: React.FC = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
    } = useForm<FieldValues>();

    const { executeRecaptcha } = useGoogleReCaptcha();

    const onSubmit: SubmitHandler<FieldValues> = async (
        data: FieldValues
    ): Promise<void> => {
        if (!executeRecaptcha) {
            console.log("Execute reCaptcha not yet available");
            return;
        }

        try {
            const token = await executeRecaptcha("contactForm");
            data.recaptchaToken = token;

            const emailResponse = await EmailAction(data); // Send data to your backend including the recaptchaToken
            console.log(emailResponse);
            reset();
        } catch (error) {
            console.error("Recaptcha verification failed:", error);
        }
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
                                    setValue={setValue}
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

const ContactFormRecaptcha = () => {
    return (
        <GoogleReCaptchaProvider
            reCaptchaKey={process.env.VITE_RECAPTCHA_SITE_KEY!}
        >
            <ContactForm />
        </GoogleReCaptchaProvider>
    );
};

export default ContactFormRecaptcha;
