export interface ButtonProps {
    children: string;
    onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    variant: 'standard' | 'white' | 'gray' | 'selected';
    size?: 'small' | 'large';
    type?: 'button' | 'submit';
    customStyle?: React.CSSProperties;
}