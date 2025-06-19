import mullateAxios from "src/libs/axios/customAxios";
import {Response, Login, NewAccessToken} from "src/types/auth/auth.type";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export const login = async (login: Login) => {
    try {
        const {data} = await mullateAxios.post<Response>(`${SERVER_URL}/api/login`, login);
        return data;
    } catch (error) {
        throw new Error("로그인 요청에 실패했습니다.");
    }
};

export const refresh = async (refreshToken: { refreshToken: string | null }): Promise<NewAccessToken> => {
    try {
        const {data} = await mullateAxios.post<NewAccessToken>(`${SERVER_URL}/refresh`, refreshToken);
        return data;
    } catch (error) {
        throw new Error("refresh Error");
    }
};