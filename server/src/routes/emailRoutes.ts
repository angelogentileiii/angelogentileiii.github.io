import { handleSendEmail, getEmails } from "../controllers/emailController";
import { Router } from "express";

const router = Router();

router.route("/").get(getEmails);

router.route("/send-email").post(handleSendEmail);

export default router;
