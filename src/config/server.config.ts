import dotenv from 'dotenv';
dotenv.config();

export const config = {
    port: process.env.PORT || 8080,
    jwt_secret: process.env.JWT_SECRET || "",
    database: {
        url: process.env.DATABASE_URL || "",
        key: process.env.DATABASE_KEY || ""
    }
}