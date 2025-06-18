import Image from "next/image"
import styles from "./style.module.scss"
import { CoffeeCardProps } from "src/types/card/coffee.type"
import { useCoffeeOptions } from "src/hooks/card/useCard"

const CoffeeCard = ({ image, name, price, onAdd }: CoffeeCardProps) => {
    const { options, handleOptionSelect, handleAddClick } = useCoffeeOptions(onAdd, name, price)

    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <Image src={image} alt={name} width={80} height={80} className={styles.image} />
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.price}>{price} 원</p>

                <div className={styles.options}>
                    <div className={styles.optionGroup}>
                        <label>온도</label>
                        <div className={styles.chips}>
                            {["HOT", "COLD"].map((val) => (
                                <span
                                    key={val}
                                    className={options.temperature === val ? styles.selected : ""}
                                    onClick={() => handleOptionSelect("temperature", val)}
                                >
                  {val}
                </span>
                            ))}
                        </div>
                    </div>

                    <div className={styles.optionGroup}>
                        <label>사이즈</label>
                        <div className={styles.chips}>
                            {["S", "M", "L"].map((val) => (
                                <span
                                    key={val}
                                    className={options.size === val ? styles.selected : ""}
                                    onClick={() => handleOptionSelect("size", val)}
                                >
                  {val}
                </span>
                            ))}
                        </div>
                    </div>

                    <div className={styles.optionGroup}>
                        <label>당도</label>
                        <div className={styles.chips}>
                            {["0%", "30%", "50%", "70%"].map((val) => (
                                <span
                                    key={val}
                                    className={options.sugar === val ? styles.selected : ""}
                                    onClick={() => handleOptionSelect("sugar", val)}
                                >
                  {val}
                </span>
                            ))}
                        </div>
                    </div>

                    <div className={styles.optionGroup}>
                        <label>얼음</label>
                        <div className={styles.chips}>
                            {["없음", "조금", "보통", "많이"].map((val) => (
                                <span
                                    key={val}
                                    className={options.ice === val ? styles.selected : ""}
                                    onClick={() => handleOptionSelect("ice", val)}
                                >
                  {val}
                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.footer}>
                <button className={styles.button} onClick={handleAddClick}>
                    추가하기
                </button>
            </div>
        </div>
    )
}

export default CoffeeCard;