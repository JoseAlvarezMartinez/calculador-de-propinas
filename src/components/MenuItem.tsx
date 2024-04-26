import type { MenuItems } from "../types"

interface PropsMenuItem {
  item: MenuItems,
  addItem: (item: MenuItems) => void
}

export const MenuItem = ({ item, addItem }: PropsMenuItem) => {
  return (
    <button
      onClick={() => addItem(item)}
      className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>
    </button>
  )
}
