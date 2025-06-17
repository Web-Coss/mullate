export interface CartItem {
    name: string
    price: number
    quantity: number
}

export interface CartProps {
    items: CartItem[];
    increase: (name: string) => void;
    decrease: (name: string) => void;
    remove: (name: string) => void;
    reset: () => void;
}