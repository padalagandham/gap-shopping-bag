export type ItemType = {
    itemName: string;
    id: number;
    inBag: boolean;
    count: number;
    actions?: JSX.Element;
    updateItemCount?: (action:string, id: number) => void
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
    updateItemCount: (action:string, id: number) => void
}

export type buttonProps = {
    callback: (id: number) => void
    itemId: number
    className: string
    text: string
}

export const ADD = "ADD";
export const REMOVE = "REMOVE";
