export interface MenuItemInterface {
    id: number,
    name: string,
    price: number
}

export interface MenuItemOrder extends MenuItemInterface {
    quantity: number
}
