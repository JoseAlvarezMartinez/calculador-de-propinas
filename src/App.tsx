import { MenuItem } from "./components/MenuItem"
import OrderContent from "./components/OrderContent"
import OrderTotals from "./components/OrderTotals"
import { menuItems } from "./data/db"
import { useOrder } from "./hooks/useOrder"

function App() {

  const { addItem, order, deleteItem } = useOrder()

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-medium text- ">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="w-10/12 mx-auto py-20 grid md:grid-cols-2">
        <section className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>

          <div className="space-y-3 mt-10">
            {menuItems.map(item => <MenuItem key={item.id} item={item} addItem={addItem} />)}
          </div>

        </section>
        <section className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          <OrderContent order={order} deleteItem={deleteItem} />

          <OrderTotals order={order}/>
        </section>
      </main>
    </>
  )
}

export default App
