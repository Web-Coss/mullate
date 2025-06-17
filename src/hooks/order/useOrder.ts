import { useState } from "react";
import { CartItem } from "src/types/cart/cart.type";
import { Toast } from "src/libs/toast";

export const useOrderModal = (items: CartItem[]) => {
    const [showModal, setShowModal] = useState(false);

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
    };

    return {
        showModal,
        handleOrder,
        handleSelectType,
        setShowModal,
    };
};