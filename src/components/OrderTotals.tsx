import type { MenuItemsOrder } from "../types"
import { formatCurrency } from "../helpers"
import { useMemo } from "react"

interface PropOrderTotals {
    order: MenuItemsOrder[]
}

const OrderTotals = ({ order }: PropOrderTotals) => {

    const subTotalAmount = useMemo(() => order.reduce((totalItem, item) => totalItem + (item.quantity * item.price), 0), [order])

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-medium text-2xl">Totales y Propinas:</h2>
                <p>Subtotal a pagar: <span>{formatCurrency(subTotalAmount)}</span></p>


                <p>Propina:
                    <span>$0</span>
                </p>

                <p>Total a pagar:
                    {/* <span>{formatCurrency(total)}</span> */}
                </p>
            </div>

            <button></button>
        </>
    )
}

export default OrderTotals