"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyRecaptchaToken = void 0;
const axios_1 = __importDefault(require("axios"));
const verifyRecaptchaToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { token } = req.body;
    if (!token) {
        return res
            .status(400)
            .json({ message: "Recaptcha token is missing or invalid." });
    }
    const secretKey = process.env.VITE_RECAPTCHA_SECRET_KEY;
    const url = process.env.VITE_RECAPTCHA_URL;
    try {
        const params = new URLSearchParams({
            secret: secretKey,
            response: token,
        });
        const response = yield axios_1.default.post(url, params);
        const { success } = response.data;
        if (!success) {
            return res
                .status(400)
                .json({ message: "Recaptcha verification failed" });
        }
        req.body = Object.assign(Object.assign({}, req.body), { tokenSuccess: success });
        next();
    }
    catch (error) {
        console.error("Error verifying reCaptcha token:", error);
        // Handle Axios error response (if available)
        const errorMessage = axios_1.default.isAxiosError(error) && error.response
            ? error.response.data.message
            : "Internal server error";
        return res.status(500).json({ message: errorMessage });
    }
});
exports.verifyRecaptchaToken = verifyRecaptchaToken;
