import { FieldValues } from "react-hook-form";
// import { EmailReturnType } from "../../../types";
import SendEmail from "./SendEmail";

// const EmailAction = async (data: FieldValues): Promise<EmailReturnType> => {
const EmailAction = async (data: FieldValues) => {
    const { firstName, lastName, phone, email, message } = data;

    const params = {
        Source: import.meta.env.VITE_CONTACT_FORM_SENDER,
        Destination: {
            ToAddresses: [import.meta.env.VITE_CONTACT_FORM_RECIPIENT],
        },
        Message: {
            Subject: {
                Data: `${firstName} ${lastName} Submitted the Contact Form`,
            },
            Body: {
                Html: {
                    Data: `
                    <p><strong>First Name:</strong> ${firstName}</p>
                    <p><strong>Last Name:</strong> ${lastName}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone (Optional)</strong> ${phone}</p>
                    <p><strong>Message:</strong> ${message}</p>
                    `,
                },
            },
        },
    };

    try {
        const response = await SendEmail(params);

        if (response && response.$metadata.httpStatusCode === 200) {
            return {
                success: true,
                successMessage: "Email sent successfully.",
            };
        } else {
            console.error("SES Error:", response);
            return {
                success: false,
                errors: { message: "Email could not be sent properly." },
            };
        }
    } catch (error) {
        console.error("SES SendEmail Error:", error);
        return {
            success: false,
            errors: { message: "An error occurred while sending the email." },
        };
    }
};

export default EmailAction;
