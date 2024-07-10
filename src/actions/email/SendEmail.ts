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
                accessKeyId: process.env.VITE_AWS_ACCESS_KEY!,
                secretAccessKey: process.env.VITE_AWS_SECRET_ACCESS_KEY!,
            },
        });
    }
    return sesClient;
};

const SendEmail = async (
    params: SendEmailCommandInput
): Promise<SendBounceCommandOutput> => {
    const sesClient = getSESClient();
    const command = new SendEmailCommand(params);
    return await sesClient.send(command);
};

export default SendEmail;
