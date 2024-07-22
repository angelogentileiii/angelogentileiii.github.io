import {
    SendEmailCommand,
    SendEmailCommandInput,
    SendBounceCommandOutput,
    SESClient,
} from "@aws-sdk/client-ses";
import { EmailReturnType, EmailSESPayload } from "../types/index.types.js";
import { Request, Response, NextFunction } from "express";

// Singleton SES client instance
let sesClient: SESClient | null = null;

const getSESClient = (): SESClient => {
    if (!sesClient) {
        sesClient = new SESClient({
            region: process.env.VITE_AWS_REGION,
            credentials: {
                accessKeyId: process.env.VITE_AWS_ACCESS_KEY!,
                secretAccessKey: process.env.VITE_AWS_SECRET_ACCESS_KEY!,
            },
        });
    }
    return sesClient;
};

const sendEmailWithSES = async (
    params: SendEmailCommandInput
): Promise<SendBounceCommandOutput | void> => {
    const sesClient = getSESClient();
    const command = new SendEmailCommand(params);
    try {
        const response = await sesClient.send(command);
        return response;
    } catch (error) {
        console.error("Error sending email:", error);
        throw error; // Rethrow other errors for general handling
    }
};

export const handleSendEmail = async (
    req: Request<any, any, EmailSESPayload>,
    res: Response<EmailReturnType>,
    next: NextFunction
): Promise<void> => {
    const { firstName, lastName, phone, email, message, tokenSuccess } =
        req.body;

    const params = {
        Source: process.env.VITE_CONTACT_FORM_SENDER!,
        Destination: {
            ToAddresses: [process.env.VITE_CONTACT_FORM_RECIPIENT!],
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
        const response = await sendEmailWithSES(params);
        console.log(response);

        if (response && response.$metadata.httpStatusCode === 200)
            res.status(200).json({
                success: true,
                successMessage: "Email sent successfully.",
                tokenSuccess: tokenSuccess,
            });
    } catch (error) {
        console.error("SES SendEmail Error:", error);
        res.status(500).json({
            success: false,
            tokenSuccess: tokenSuccess,
            errors: {
                message:
                    "An error occurred while attempting to send your message.",
                error: error,
            },
        });
    }
};
