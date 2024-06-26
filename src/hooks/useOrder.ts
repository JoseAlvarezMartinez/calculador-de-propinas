import type { MenuItems, MenuItemsOrder } from "../types"
import { useState } from "react"
export const useOrder = () => {

    const [order, setOrder] = useState<MenuItemsOrder[]>([])
    const [tip, setTip] = useState(0)


    const addItem = (item: MenuItems) => {

        const itemExists = order.find(orderItem => orderItem.id === item.id)

        if (itemExists) {
            const newCart = order.map(orderItem => orderItem.id === item.id ? { ...item, quantity: orderItem.quantity + 1 } : orderItem)
            setOrder(newCart)
        } else {
            const newItem = { ...item, quantity: 1 }
            setOrder([...order, newItem])
        }
    }

    const deleteItem = (item: MenuItems['id']) => {
        const filter = order.filter(orderItem => orderItem.id !== item)

        setOrder(filter)
    }
    const placeOrder = () => {
        setOrder([])
        setTip(0)
    }



    return {
        addItem,
        order,
        deleteItem,
        tip,
        setTip,
        placeOrder

    }
}