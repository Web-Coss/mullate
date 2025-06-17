export interface CoffeeCardProps {
    image: string
    name: string
    price: number
    onAdd: (item: { name: string; price: number, options: OptionType }) => void
}

export type OptionType = {
    temperature: string | null
    size: string | null
    sugar: string | null
    ice: string | null
}