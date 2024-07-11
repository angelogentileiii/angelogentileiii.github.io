interface EmailSuccess {
    success: true;
    successMessage: string;
}

interface EmailFail {
    success: false;
    errors: {
        error: unknown;
        message: string;
    };
}

export type EmailReturnType = EmailSuccess | EmailFail;

export interface EmailData {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    message?: string;
}
