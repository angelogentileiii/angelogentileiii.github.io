import axios from "axios";

const verifyCaptchaAction = async (token: string) => {
    const secretKey = import.meta.env.VITE_RECAPTCHA_SECRET_KEY;
    const url = `https://www.google.com/recaptcha/api/siteverify`;
    const params = new URLSearchParams();

    params.append("secret", secretKey);
    params.append("response", token);

    try {
        const response = await axios.post(url, params);
        const data = response.data;

        return data.success;
    } catch (error) {
        console.error("Error verifying reCaptcha token:", error);
        return false;
    }
};

export default verifyCaptchaAction;
