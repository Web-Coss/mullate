import React from "react";
import styles from "./style.module.scss";
import { TextFieldProps } from "src/types/ui/textfield/textfield.type";

const TextField = ({
                       label,
                       name,
                       value,
                       type = "text",
                       onChange,
                       error,
                       placeholder,
                   }: TextFieldProps) => {
    return (
        <div className={styles.text_field_container}>
            <p className={styles.label}>{label}</p>

            <div className={styles.text_field_wrapper}>
                <input
                    type={type}
                    name={name}
                    className={`${styles.text_field} ${styles.input} ${error ? styles.error : ""}`}
                    value={value ?? ""}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            </div>

            {error && <span className={styles["error-message"]}>{error}</span>}
        </div>
    );
};

export default TextField;