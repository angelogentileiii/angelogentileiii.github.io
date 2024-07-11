import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import emailRoutes from "./src/routes/emailRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || "5500";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", emailRoutes);

const serverRun = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is running at http://localhost:${PORT}/`);
        });
    } catch (error) {
        console.error("Error during server start:", error);
    }
};

serverRun();
