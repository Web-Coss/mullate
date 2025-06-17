"use client";

import { useEffect, useState } from "react";
import { CartItem } from "src/types/cart/cart.type";

export const useCart = () => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [timer, setTimer] = useState(120);
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (!active || cart.length === 0) return;

        const interval = setInterval(() => {
            setTimer((prev) => {
                if (prev <= 1) {
                    reset();
                    return 120;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [active, cart]);

    const reset = () => {
        setCart([]);
        setTimer(120);
        setActive(false);
    };

    const startTimer = () => {
        setTimer(120);
        setActive(true);
    };

    const addItem = ({ name, price }: { name: string; price: number }) => {
        setCart((prev) => {
            const exists = prev.find((item) => item.name === name);
            if (exists) {
                return prev.map((item) =>
                    item.name === name ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prev, { name, price, quantity: 1 }];
            }
        });
        startTimer();
    };

    const increase = (name: string) => {
        setCart((prev) =>
            prev.map((item) =>
                item.name === name ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
        startTimer();
    };

    const decrease = (name: string) => {
        setCart((prev) =>
            prev
                .map((item) =>
                    item.name === name ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter((item) => item.quantity > 0)
        );
        startTimer();
    };

    const remove = (name: string) => {
        setCart((prev) => prev.filter((item) => item.name !== name));
        startTimer();
    };

    return {
        cart,
        addItem,
        increase,
        decrease,
        remove,
        reset,
        timer,
    };
};