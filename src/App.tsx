import { MenuItem } from "./components/MenuItem"
import { menuItems } from "./data/db"
import { useOrder } from "./hooks/useOrder"

function App() {

  const { addItem } = useOrder()

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-medium text- ">Calculadora de Propinas y Consumo</h1>
      </header>

      <main className="w-10/12 mx-auto py-20 grid md:grid-cols-2">
        <section className="p-5">
          <h2 className="text-4xl font-black">Menú</h2>

          <div className="space-y-3 mt-10">
            {menuItems.map(item => <MenuItem key={item.id} item={item} addItem={addItem}/>)}
          </div>

        </section>
        <section>
          <h2>Consumo</h2>
        </section>
      </main>
    </>
  )
}

export default App
