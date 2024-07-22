"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const emailController_1 = require("../controllers/emailController");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.route("/send-email").post(emailController_1.handleSendEmail);
exports.default = router;
