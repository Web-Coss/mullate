"use client";

import Cart from "src/components/common/cart";
import { useCart } from "src/hooks/cart/useCart";

const CartWrapper = () => {
    const { cart, increase, decrease, remove, reset, timer } = useCart();

    return (
        <Cart
            items={cart}
            increase={increase}
            decrease={decrease}
            remove={remove}
            reset={reset}
            timer={timer}
        />
    );
};

export default CartWrapper;