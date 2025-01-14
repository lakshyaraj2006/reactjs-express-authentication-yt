import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { userRouter } from "./routes/user.route.js";

export const createApp = () => {
    const app = express();

    app.use(express.json());
    app.use(cookieParser());
    app.use(cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true
    }));

    app.use('/api/v1/auth', userRouter)

    return app;
}
