interface EmailSuccess {
    success: true;
    successMessage: string;
    tokenSuccess: boolean;
}

interface EmailFail {
    success: false;
    tokenSuccess: boolean;
    errors: {
        error: unknown;
        message: string;
    };
}

export type EmailReturnType = EmailSuccess | EmailFail;

interface RecaptchaToken {
    token: string;
}

interface RecaptchaStatus {
    tokenSuccess: boolean;
}

export interface EmailData {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    message?: string;
}

export type EmailRequest = EmailData & RecaptchaToken;
export type EmailSESPayload = EmailData & RecaptchaStatus;

export interface GoogleRecaptchaResponse {
    success: boolean;
    challenge_ts: string; // ISO 8601 format
    hostname: string;
    score: number;
    action: string;
}
