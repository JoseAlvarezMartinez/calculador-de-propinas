import { useState } from "react"
import type { MenuItemOrder } from "../types"
export const useOrder = () => {

    const [order, setOrder] = useState<MenuItemOrder[]>([])

    return {

    }
}