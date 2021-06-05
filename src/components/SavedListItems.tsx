import React from "react"
import { savedListItemsProps } from "../types"
import { DeleteCTA } from "./deleteCTA"
import { Item } from "./Item"
import "./SavedListItems.css"

export const SavedListItems = ({items, deleteItem}:savedListItemsProps) => {

    return ( <div className="save-section">
    <h3>Save for later items</h3>
    {items.map((item: any, index: number) => {
            return (<Item key={index}  itemName={item.itemName} id={item.id} inBag={false} actions={<div>
                <DeleteCTA deleteItem={deleteItem} itemId={item.id} />
                <button>Move to Active</button>
            </div>}/>)
        })}
   </div>)
}