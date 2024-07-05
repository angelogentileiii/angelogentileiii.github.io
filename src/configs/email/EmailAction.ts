import { FieldValues } from "react-hook-form";
import SendEmail from "./SendEmail";

interface EmailSuccess {
    success: true;
    successMessage: string;
}

interface EmailFail {
    success: false;
    errors: {
        message: string;
    };
}

type EmailReturnType = EmailSuccess | EmailFail;

const EmailAction = async (data: FieldValues): Promise<EmailReturnType> => {
    const params = {
        Source: data.email,
        Destination: {
            ToAddresses: ["angelogentileiii@gmail.com"],
        },
        Message: {
            Subject: {
                Data: `${data.firstName} ${data.lastName} Submitted the Contact Form`,
            },
            Body: {
                Html: {
                    Data: data.message,
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
