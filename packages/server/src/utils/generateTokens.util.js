import jwt from "jsonwebtoken";

export const generateAccessAndRefreshTokens = (userid, email) => {
    const accessToken_payload = {
        id: userid,
        email: email
    }
    const accessToken = jwt.sign(accessToken_payload, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    })



    const refreshToken_payload = {
        id: userid
    }
    const refreshToken = jwt.sign(refreshToken_payload, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    })

    return { accessToken, refreshToken };
};

