import { prisma } from "../config/prisma.config.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { generateAccessAndRefreshTokens } from "../utils/generateTokens.util.js";

const registerUser = async (req, res) => {
    let success = false;
    const { username, email, password, cpassword } = req.body;

    const exists = await prisma.user.findFirst({
        where: {
            OR: [{ username: username }, { email: email }]
        }
    });

    if (exists) {
        res.status(400).json({
            success,
            message: 'Username or email already in use!'
        })
    } else if (password !== cpassword) {
        res.status(400).json({
            success,
            message: 'Passwords do not match!'
        })
    } else {
        const hash = await bcrypt.hash(password, 12);

        await prisma.user.create({
            data: { username, email, password: hash }
        });
        success = true;

        res.status(201).json({
            success,
            message: 'User account created!'
        });
    }
};

const loginUser = async (req, res) => {
    let success = false;
    const { username, password } = req.body;

    const user = await prisma.user.findFirst({
        where: { username: username }
    });

    if (user) {
        const checkPassword = await bcrypt.compare(password, user.password);

        if (checkPassword) {
            success = true;
            const { accessToken, refreshToken } = generateAccessAndRefreshTokens(user.id, user.email);

            res.cookie('refreshtoken', refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
                secure: process.env.NODE_ENV === "production"
            })

            res.status(200).json({
                success,
                accessToken,
                message: 'You have been logged in successfully!'
            })
        } else {
            res.status(400).json({
                success,
                message: 'Invalid password!'
            })
        }
    } else {
        res.status(404).json({
            success,
            message: 'User was not found!'
        })
    }

};

const logoutUser = (req, res) => {
    let success = false;
    const cookies = req.cookies;

    if (cookies['refreshtoken']) {
        res.clearCookie('refreshtoken');
        success = true;

        res.status(200).json({
            success,
            message: 'Logged out successfully!'
        })
    } else {
        res.status(401).json({
            success,
            message: 'Unauthorized request!'
        })
    }
};

const refreshToken = async (req, res) => {
    let success = false;
    const cookies = req.cookies;

    if (cookies['refreshtoken']) {
        const decoded = jwt.verify(cookies['refreshtoken'], process.env.REFRESH_TOKEN_SECRET);
        const user = await prisma.user.findUnique({
            where: { id: decoded.id }
        });

        const { accessToken, refreshToken } = generateAccessAndRefreshTokens(user.id, user.email);
        success = true;

        res.cookie('refreshtoken', refreshToken, {
            maxAge: 30 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production"
        })

        res.status(200).json({
            success,
            accessToken
        })
    } else {
        res.status(401).json({
            success,
            message: 'Unauthorized request!'
        })
    }
};


export const userController = { registerUser, loginUser, logoutUser, refreshToken };

