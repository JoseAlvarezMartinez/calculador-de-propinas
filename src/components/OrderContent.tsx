import type { MenuItems, MenuItemsOrder } from "../types"
import { formatCurrency } from "../helpers"

interface PropsOrderContent {
    order: MenuItemsOrder[],
    deleteItem: (item: MenuItems['id']) => void
}

const OrderContent = ({ order, deleteItem }: PropsOrderContent) => {
    return (
        <div>
            <div className="space-y-3 mt-5">
                {order.map(item => (
                    <div className="flex justify-between items-center border-t border-gray-200  py-5 last-of-type:border-b" key={item.id}>

                        <div>
                            <p>
                                {item.name} - {formatCurrency(item.price)}
                            </p>
                            <p className="font-medium">
                                Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                            </p>
                        </div>

                        <button
                            onClick={() => deleteItem(item.id)}
                            className="bg-red-600 h8 h-8 w-8 rounded-full text-white font-black">X</button>
                    </div>))}
            </div>
        </div>
    )
}

export default OrderContent