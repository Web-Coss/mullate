export interface TextFieldProps {
    label: string;
    name?: string;
    value?: string;
    type?: "text" | "password";
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    placeholder?: string;
}