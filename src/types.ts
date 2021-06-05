export type ItemType = {
    itemName: string;
    id: number;
    inBag: boolean;
    actions?: JSX.Element;
}

export type savedListItemsProps = {
    items: ItemType[]
    deleteItem: (id:number) => void
}

export type bagItemProps = {
    items: ItemType[]
    deleteItem: (id:number) => void
}