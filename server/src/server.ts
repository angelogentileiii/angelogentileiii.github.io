import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";

import emailRoutes from "./routes/emailRoutes.js";

import { verifyRecaptchaToken } from "./middlewares/index.middlewares.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5500;

// Security and parsing middleware
app.use(helmet());

// Configure CSP headers specifically for reCAPTCHA
app.use(
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: [
                "'self'",
                "https://www.google.com",
                "https://www.gstatic.com",
            ],
            connectSrc: [
                "'self'",
                "https://www.google.com",
                "https://www.gstatic.com",
            ],
            // Only include other directives if needed
        },
    })
);

// Manage and control access to resources on your server from different origins
app.use(cors());

// Build the server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route for email requests
app.use("/send-email", verifyRecaptchaToken, emailRoutes);

const serverRun = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is running at ${PORT}`);
        });
    } catch (error) {
        console.error("Error during server start:", error);
    }
};

serverRun();
