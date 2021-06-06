export type ItemType = {
    itemName: string;
    id: number;
    inBag: boolean;
    actions?: JSX.Element;
}

export type savedListItemsProps = {
    items: ItemType[]
    deleteItem: (id:number) => void
    addToBag: (id:number) => void
}

export type bagItemProps = {
    items: ItemType[]
    deleteItem: (id:number) => void
    addToList: (id:number) => void
}

export type buttonProps = {
    callback: (id: number) => void
    itemId: number
    className: string
    text: string
}