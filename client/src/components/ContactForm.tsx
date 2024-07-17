import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Input, PhoneInput as CustomPhoneInput } from "./index.components";
import contactInputFields from "../configs/formConfigs/contactInputFields";
import {
    GoogleReCaptchaProvider,
    useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
// import verifyCaptchaAction from "../actions/captcha/verifyCaptchaAction";

import axios from "axios";

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

            const emailResponse = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/send-email`,
                {
                    ...data,
                    token,
                }
            );

            console.log("email response: ", emailResponse);

            reset();
        } catch (error) {
            console.error("Your email request failed:", error);
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

export const ContactFormRecaptcha = () => {
    return (
        <div>
            <GoogleReCaptchaProvider
                reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
            >
                <ContactForm />
                <small className="text-[.6rem] text-gray-700">
                    This site is protected by reCAPTCHA and the Google{" "}
                    <a
                        href="https://policies.google.com/privacy"
                        className="text-amber-600"
                    >
                        Privacy Policy
                    </a>{" "}
                    and{" "}
                    <a
                        href="https://policies.google.com/terms"
                        className="text-amber-600"
                    >
                        Terms of Service
                    </a>{" "}
                    apply
                </small>
            </GoogleReCaptchaProvider>
        </div>
    );
};
