export interface MenuItems {
  id: number,
  name: string,
  price: number
}

export interface MenuItemsOrder extends MenuItems {
  quantity: number
}