import {
    SendEmailCommand,
    SendEmailCommandInput,
    SendBounceCommandOutput,
    SESClient,
} from "@aws-sdk/client-ses";

// Singleton SES client instance
let sesClient: SESClient | null = null;

const getSESClient = (): SESClient => {
    if (!sesClient) {
        sesClient = new SESClient({
            region: "us-east-1",
            credentials: {
                accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY,
                secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
            },
        });
    }
    return sesClient;
};

const SendEmail = async (
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

export default SendEmail;
