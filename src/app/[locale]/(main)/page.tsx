"use client"

import CoffeeCard from "src/components/ui/category";
import Cart from "src/components/common/cart"
import {useCart} from "src/hooks/cart/useCart";
import styles from "./style.module.scss"

const Menu = () => {
    const {cart, addItem} = useCart();

    return (
        <div>
            <main className="main">
                <CoffeeCard image="/images/coffee/espresso.png" name="에스프레소" price={3000} onAdd={addItem}/>
                <CoffeeCard image="/images/coffee/latte.png" name="카페라떼" price={4500} onAdd={addItem}/>
                <CoffeeCard image="/images/coffee/americano.png" name="아메리카노" price={3000} onAdd={addItem}/>
                <CoffeeCard image="/images/coffee/frappuccino.png" name="프라푸치노" price={5000} onAdd={addItem}/>
            </main>
                <Cart items={cart}/>
        </div>
    )
}

export default Menu;