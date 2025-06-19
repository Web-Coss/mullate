import styles from './style.module.scss';
import {ButtonProps} from "src/types/ui/button/button.type";

const Button = ({
                    children,
                    onClick,
                    disabled,
                    variant,
                    size = 'small',
                    type = 'button',
                }: ButtonProps) => {
    return (
        <button
            className={`${styles.button} ${variant ? styles[variant] : ''} ${styles[size]} ${disabled ? styles.disabled : ''}`}
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;