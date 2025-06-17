"use client";

import styles from "./style.module.scss";
import Portal from "src/libs/portal";

interface Props {
    onClose: () => void;
    onSelect: (type: string) => void;
}

const OrderModal = ({ onClose, onSelect }: Props) => {
    return (
        <Portal>
            <div className={styles.modalOverlay}>
                <div className={styles.modal}>
                    <h3>주문 방식을 선택해주세요</h3>
                    <div className={styles.modalButtons}>
                        <button onClick={() => onSelect("포장")}>포장</button>
                        <button onClick={() => onSelect("매장")}>매장</button>
                    </div>
                    <button className={styles.modalClose} onClick={onClose}>
                        닫기
                    </button>
                </div>
            </div>
        </Portal>
    );
};

export default OrderModal;