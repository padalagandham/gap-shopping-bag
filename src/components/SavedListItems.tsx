import React from "react"
import { Item } from "./Item"
import "./SavedListItems.css"

type savedListItemsProps  = {
    items: []
}

export const SavedListItems = ({items}:any) => {

    return ( <div className="save-section">
    <h3>Save for later items</h3>
    {items.map((item: any, index: number) => {
            return (<Item key={index}  itemName={item.itemName} id={item.id} inBag={false} actions={<div>
                <button>Delete</button>
                <button>Move to Active</button>
            </div>}/>)
        })}
   </div>)
}