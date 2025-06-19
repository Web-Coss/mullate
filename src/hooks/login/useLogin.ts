"use client";

import {useCallback, useState} from "react";
import {useRouter} from "next/navigation";
import {login} from "src/apis/auth/auth.api";
import {Login} from "src/types/auth/auth.type";
import {Toast} from "src/libs/toast";
import Token from "src/libs/token/cookie";
import {ACCESS_TOKEN, REFRESH_TOKEN} from "src/constants/token/token.constants";

const useLogin = () => {
    const router = useRouter();

    const [loginData, setLoginData] = useState<Login>({
        userId: "",
        password: "",
    });

    const handleLoginData = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const {name, value} = e.target;
            setLoginData((prev) => ({...prev, [name]: value}));
        },
        []
    );

    const submitLoginData = useCallback(async () => {
        if (!loginData.userId.trim()) return Toast("info", "아이디를 입력해주세요.");
        if (!loginData.password.trim()) return Toast("info", "비밀번호를 입력해주세요.");

        try {
            const { accessToken, refreshToken } = await login(loginData);

            Token.setToken(ACCESS_TOKEN, accessToken);
            Token.setToken(REFRESH_TOKEN, refreshToken);

            Toast("success", "로그인 성공");
            router.push("/main");
        } catch (error) {
            Toast("error", "정보를 다시 확인해주세요.");
            console.error(error);
        }
    }, [loginData, router]);

    const handleKeyPress = useCallback(
        (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
                submitLoginData();
            }
        },
        [submitLoginData]
    );

    return {
        loginData,
        handleLoginData,
        handleKeyPress,
        submitLoginData,
    };
};

export default useLogin;