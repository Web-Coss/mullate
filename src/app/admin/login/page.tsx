"use client"

import useLogin from "src/hooks/login/useLogin";
import {useRef} from "react";
import styles from "./style.module.scss";
import TextField from "src/components/textField";
import Button from "src/components/button/button";

const Login = () => {
    const {loginData, handleLoginData, submitLoginData } = useLogin();
    const formRef = useRef<HTMLFormElement>(null);

    return (
        <main className={styles.login}>
            <form
                className={styles.form}
                ref={formRef}
                onSubmit={(e) => {
                    e.preventDefault();
                    submitLoginData();
                }}>
                <div className={styles.logo_container}>
                    <h1>Mullate Admin</h1>
                </div>
                <div className={styles.text_field_container}>
                    <TextField label="Id" name="userId" value={loginData.userId} onChange={handleLoginData} type="text"
                               placeholder="아이디를 입력해주세요."/>
                    <TextField label="Password" name="password" value={loginData.password} onChange={handleLoginData}
                               type="password" placeholder="비밀번호를 입력해주세요."/>
                </div>
                <Button variant="standard" onClick={submitLoginData} type="submit" size="large">로그인</Button>
            </form>
        </main>
    )
}

export default Login;