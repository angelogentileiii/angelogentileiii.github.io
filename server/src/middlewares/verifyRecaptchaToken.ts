import axios, { AxiosResponse } from "axios";
import {
    EmailRequest,
    EmailSESPayload,
    GoogleRecaptchaResponse,
} from "../types/index.types";
import { Request, Response, NextFunction } from "express";

export const verifyRecaptchaToken = async (
    req: Request<any, any, EmailRequest>,
    res: Response,
    next: NextFunction
) => {
    const { token } = req.body;

    if (!token) {
        return res
            .status(400)
            .json({ message: "Recaptcha token is missing or invalid." });
    }

    const secretKey = process.env.VITE_RECAPTCHA_SECRET_KEY!;
    const url = process.env.VITE_RECAPTCHA_URL!;

    try {
        const params = new URLSearchParams({
            secret: secretKey,
            response: token,
        });

        const response = await axios.post<
            any,
            AxiosResponse<GoogleRecaptchaResponse>
        >(url, params);

        const { success } = response.data;

        if (!success) {
            return res
                .status(400)
                .json({ message: "Recaptcha verification failed" });
        }

        req.body = {
            ...req.body,
            tokenSuccess: success,
        } as EmailRequest & EmailSESPayload;

        next();
    } catch (error) {
        console.error("Error verifying reCaptcha token:", error);

        // Handle Axios error response (if available)
        const errorMessage =
            axios.isAxiosError(error) && error.response
                ? error.response.data.message
                : "Internal server error";

        return res.status(500).json({ message: errorMessage });
    }
};
