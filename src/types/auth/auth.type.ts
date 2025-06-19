export interface Login {
    userId: string;
    password: string;
}

export interface Response {
    data : {
        accessToken: string;
        refreshToken: string;
    }
}

export interface NewAccessToken {
    data: {
        accessToken: string;
    }
}