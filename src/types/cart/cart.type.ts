export interface CartItem {
    name: string
    price: number
    quantity: number
}

export interface CartProps {
    items: CartItem[]
}