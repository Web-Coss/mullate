"use client";

import { useState } from "react";
import styles from "./style.module.scss";
import Portal from "src/libs/portal";
import { Toast } from "src/libs/toast";
import { CartProps } from "src/types/cart/cart.type";

const Cart = ({ items, increase, decrease, remove, reset, timer }: CartProps & { reset: () => void; timer: number }) => {
    const [showModal, setShowModal] = useState(false);

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleOrder = () => {
        if (items.length === 0) {
            Toast("error", "장바구니가 비어 있습니다.");
            return;
        }
        setShowModal(true);
    };

    const handleSelectType = (type: string) => {
        setShowModal(false);
        Toast("success", `${type} 주문이 접수되었습니다.`);
        reset();
    };

    return (
        <>
            <aside className={styles.cart}>
                <div className={styles.header}>
                    <h2>장바구니</h2>
                    <p className={styles.timer}>남은 시간: {timer}초</p>
                </div>
                <ul className={styles.itemList}>
                    {items.length === 0 ? (
                        <p className={styles.empty}>선택된 음료가 없습니다.</p>
                    ) : (
                        items.map((item) => (
                            <li key={item.name} className={styles.item}>
                                <div className={styles.itemInfo}>
                                    <span className={styles.name}>{item.name}</span>
                                    <div className={styles.qtyControls}>
                                        <span className={styles.qty}>x {item.quantity}</span>
                                        <button onClick={() => increase(item.name)}>+</button>
                                        <button onClick={() => decrease(item.name)}>-</button>
                                        <button className={styles.delete} onClick={() => remove(item.name)}>삭제</button>
                                    </div>
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
                <button className={styles.button} onClick={handleOrder}>
                    주문하기
                </button>
            </aside>

            {showModal && (
                <Portal>
                    <div className={styles.modalOverlay}>
                        <div className={styles.modal}>
                            <h3>주문 방식을 선택해주세요</h3>
                            <div className={styles.modalButtons}>
                                <button onClick={() => handleSelectType("포장")}>포장</button>
                                <button onClick={() => handleSelectType("매장")}>매장</button>
                            </div>
                            <button
                                className={styles.modalClose}
                                onClick={() => setShowModal(false)}
                            >
                                닫기
                            </button>
                        </div>
                    </div>
                </Portal>
            )}
        </>
    );
};

export default Cart;