"use client"

import CoffeeCard from "src/components/category";
import {useCart} from "src/hooks/cart/useCart";
import styles from "./style.module.scss"
import {useTranslations} from "next-intl";

const Main = () => {
    const t = useTranslations("main");
    const { addItem } = useCart();

    return (
        <main className="main">
            <div className={styles.menu_container}>
                <p className={styles.menu_title}>{t("title")}</p>
                <section className={styles.card_container}>
                    <CoffeeCard image="/images/coffee/espresso.png" name="에스프레소" price={3000} onAdd={addItem} />
                    <CoffeeCard image="/images/coffee/latte.png" name="카페라떼" price={4500} onAdd={addItem} />
                    <CoffeeCard image="/images/coffee/americano.png" name="아메리카노" price={3000} onAdd={addItem} />
                    <CoffeeCard image="/images/coffee/frappuccino.png" name="프라푸치노" price={5000} onAdd={addItem} />
                </section>
            </div>
        </main>
    );
};

export default Main;