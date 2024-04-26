import { useState } from "react"
import type { MenuItemInterface, MenuItemOrder } from "../types"

export const useOrder = () => {

    const [order, setOrder] = useState<MenuItemOrder[]>([])

    const addItem = (item: MenuItemInterface) => {

        const itemExists: number = order.findIndex(element => element.id === item.id)

        if (itemExists >= 0) {
            const newCart = [...order]
            newCart[itemExists].quantity++
            setOrder(newCart)
        } else {
            const newItem = { ...item, quantity: 1 }
            setOrder([...order, newItem])
        }
    }
    return {
        addItem
    }
}