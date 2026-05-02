export type user_create = {
    username: string,
    email: string,
    password: string,
    created_at?: string,
    role?: string
}

export type user_update = {
    username?: string,
    email?: string,
    password?: string,
    created_at?: string,
    role?: string
}

export type TokenPayLoad = {
    id: string,
    iat: number,
    exp: number,
    role: "ADMIN" | "USER"
}