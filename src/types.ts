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
    handleDelete: (id:number)=>Promise<void>
    handleEditFood: (food:FoodProps)=>void
}