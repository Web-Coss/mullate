import styles from "./style.module.scss"
import {CartProps} from "src/types/cart/cart.type";

const Cart = ({ items }: CartProps) => {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

    return (
        <aside className={styles.cart}>
            <div className={styles.header}>
                <h2>장바구니</h2>
            </div>
            <ul className={styles.itemList}>
                {items.length === 0 ? (
                    <p className={styles.empty}>선택된 음료가 없습니다.</p>
                ) : (
                    items.map((item) => (
                        <li key={item.name} className={styles.item}>
                            <div>
                                <span className={styles.name}>{item.name}</span>
                                <span className={styles.qty}>x {item.quantity}</span>
                            </div>
                            <div className={styles.price}>
                                ₩{(item.price * item.quantity).toLocaleString()}
                            </div>
                        </li>
                    ))
                )}
            </ul>
            <div className={styles.total}>
                <p>총 합계</p>
                <strong>₩{total.toLocaleString()}</strong>
            </div>
            <button className={styles.button}>주문하기</button>
        </aside>
    )
}

export default Cart