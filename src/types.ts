import { ElementType, ReactNode } from "react"

export interface FoodProps {
    id: number
    name: string
    description: string
    price: number
    available: boolean
    image: string
}

export interface propsAndFoodProps {
    food: FoodProps
    handleDelete: (id: number) => Promise<void>
    handleEditFood: (food: FoodProps) => void
}

export interface HeaderProps {
    openModal: () => void
}

export interface ModalProps {
    isOpen: boolean
    setIsOpen: () => void
    children?: ReactNode;
}

export interface ModalAddFoodProps extends ModalProps {
    handleAddFood: (food: FoodProps) => Promise<void>
}

export interface ModalEditFoodProps extends ModalAddFoodProps {
    handleUpdateFood: () => void
}

export interface IconProps {
    size:number
}

export interface InputProps {
    name: string
    placeholder:string
    icon?: ElementType<IconProps>
}