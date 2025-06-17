import {useState} from 'react';
import {CartItem} from "src/types/cart/cart.type";


export const useCart = () => {
    const [cart, setCart] = useState<CartItem[]>([])

    const addItem = ({ name, price }: { name: string; price: number }) => {
        setCart((prev) => {
            const exists = prev.find((item) => item.name === name)
            if (exists) {
                return prev.map((item) =>
                    item.name === name ? { ...item, quantity: item.quantity + 1 } : item
                )
            } else {
                return [...prev, { name, price, quantity: 1 }]
            }
        })
    }

    return {
        cart,
        addItem,
    }
}