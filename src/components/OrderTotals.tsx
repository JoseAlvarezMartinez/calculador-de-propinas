import type { MenuItemsOrder } from "../types"
import { formatCurrency } from "../helpers"
import { useMemo } from "react"

interface PropOrderTotals {
    order: MenuItemsOrder[],
    tip: number,
    placeOrder:() => void
}

const OrderTotals = ({ order, tip,placeOrder }: PropOrderTotals) => {

    const subTotalAmount = useMemo(() => order.reduce((totalItem, item) => totalItem + (item.quantity * item.price), 0), [order])

    const tipAmount = useMemo(() => subTotalAmount * tip, [tip, order])

    const totalAmount = useMemo(() => tipAmount + subTotalAmount, [tip, order])

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-medium text-2xl">Totales y Propinas:</h2>
                <p>Subtotal a pagar: <span>{formatCurrency(subTotalAmount)}</span></p>


                <p>Propina:
                    <span>{formatCurrency(tipAmount)}</span>
                </p>

                <p>Total a pagar:
                    <span>{formatCurrency(totalAmount)}</span>
                </p>
            </div>

            <button 
            onClick={placeOrder}
            disabled={totalAmount === 0}
            className="w-full disabled:opacity-10 bg-black p-3 uppercase text-white font-bold mt-10">Guardar Orden</button>
        </>
    )
}

export default OrderTotals