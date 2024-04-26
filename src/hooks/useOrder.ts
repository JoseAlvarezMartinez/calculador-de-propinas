import type { MenuItems, MenuItemsOrder } from "../types"
import { useState } from "react"
export const useOrder = () => {

    const [order, setOrder] = useState<MenuItemsOrder[]>([])

    const addItem = (item: MenuItems) => {

        const itemExists: number = order.findIndex(element => element.id === item.id)

        if (itemExists >= 0) {
            const newCart = [...order]
            newCart[itemExists].quantity++
            setOrder(newCart)
        } else {
            const newItem: MenuItemsOrder = { ...item, quantity: 1 }
            setOrder([...order, newItem])
        }
    }
    return {
        addItem
    }
}