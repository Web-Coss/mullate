export interface Login {
    userId: string;
    password: string;
}

export interface Response {
    accessToken: string;
    refreshToken: string;
}

export interface NewAccessToken {
    accessToken: string;
}