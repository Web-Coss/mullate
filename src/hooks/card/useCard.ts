import { useState } from "react";
import { OptionType } from "src/types/card/coffee.type";
import { Toast } from "src/libs/toast";

export const useCoffeeOptions = (
    onAdd: (item: { name: string; price: number; options: OptionType }) => void,
    name: string,
    price: number
) => {
    const [options, setOptions] = useState<OptionType>({
        temperature: null,
        size: null,
        sugar: null,
        ice: null,
    });

    const handleOptionSelect = (key: keyof OptionType, value: string) => {
        setOptions((prev) => ({ ...prev, [key]: value }));
    };

    const handleAddClick = () => {
        const allSelected = Object.values(options).every((val) => val !== null);
        if (!allSelected) {
            Toast("info", "옵션을 모두 선택해주세요!");
            return;
        }

        onAdd({ name, price, options });
    };

    return {
        options,
        handleOptionSelect,
        handleAddClick,
    };
};