import { handleSendEmail } from "../controllers/emailController.js";
import { Router } from "express";

const router = Router();

router.route("/").post(handleSendEmail);

export default router;
