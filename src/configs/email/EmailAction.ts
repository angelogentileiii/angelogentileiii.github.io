import { FieldValues } from "react-hook-form";
import { EmailReturnType } from "../../types";
import SendEmail from "./SendEmail";

const EmailAction = async (data: FieldValues): Promise<EmailReturnType> => {
    const { firstName, lastName, phone, email, message } = data;

    const params = {
        Source: process.env.CONTACT_FORM_SENDER!,
        Destination: {
            ToAddresses: [process.env.CONTACT_FORM_RECIPIENT!],
        },
        Message: {
            Subject: {
                Data: `${firstName} ${lastName} Submitted the Contact Form`,
            },
            Body: {
                Html: {
                    Data: `
                    First Name: ${firstName}
                    Last Name: ${lastName}
                    Email: ${email}
                    Phone (Optional): ${phone}
                    Message: ${message}
                    `,
                },
            },
        },
    };

    const response = await SendEmail(params);

    const error =
        response.$metadata.httpStatusCode === 200
            ? null
            : { message: "Email could not be sent properly." };

    if (error) {
        return {
            success: false,
            errors: error,
        };
    }

    return {
        success: true,
        successMessage:
            "Thank you for reaching out, I look forward to speaking with you soon!",
    };
};

export default EmailAction;
