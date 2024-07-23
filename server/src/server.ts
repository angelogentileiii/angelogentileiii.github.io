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
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
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
