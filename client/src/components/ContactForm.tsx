import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import {
    Input,
    PhoneInput as CustomPhoneInput,
    TextArea,
} from "./index.components";
import contactInputFields from "../configs/formConfigs/contactInputFields";
import {
    GoogleReCaptchaProvider,
    useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

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
                `${import.meta.env.VITE_SITE_URL}/send-email`,
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
        <div className="mx-auto bg-white rounded-lg shadow-md p-4 w-full">
            <form
                autoComplete="off"
                className="placeholder:text-start flex flex-col items-center"
                onSubmit={handleSubmit(onSubmit)}
            >
                {contactInputFields.map((input, index: number) => {
                    const { name, placeholder, rules } = input;
                    if (name === "phone") {
                        return (
                            <CustomPhoneInput
                                key={index + name}
                                name={name}
                                placeholder={placeholder}
                                register={control.register}
                                setValue={setValue}
                                rules={rules}
                                error={errors}
                            />
                        );
                    } else if (name === "message") {
                        return (
                            <TextArea
                                key={index + name}
                                name={name}
                                placeholder={placeholder}
                                register={control.register}
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
                            register={control.register}
                            rules={rules}
                            error={errors}
                        />
                    );
                })}
                <br />
                <button
                    className="bg-amber-600 hover:bg-opacity-80 text-white my-2 mx-2 sm:mx-3 py-2 px-4 rounded-md whitespace-nowrap text-center"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

const reCaptchaKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY!;

export const ContactFormRecaptcha = () => {
    return (
        <div>
            <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey}>
                <ContactForm />
            </GoogleReCaptchaProvider>
        </div>
    );
};
