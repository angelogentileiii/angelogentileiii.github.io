import { handleSendEmail } from "../controllers/emailController.js";
import { Router } from "express";

const router = Router();

router.route("/send-email").post(handleSendEmail);

export default router;
