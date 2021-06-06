import { savedListItemsProps } from "../types"
import { ButtonCTA } from "./ButtonCTA"
import { Item } from "./Item"
import "./SavedListItems.css"

export const SavedListItems = ({items, deleteItem, addToBag}:savedListItemsProps) => {

    return ( <div className="save-section">
    <h3>Save for later items</h3>
    {items.map((item: any, index: number) => {
            return (<Item key={index} count={item.count}  itemName={item.itemName} id={item.id} inBag={false} actions={<div>
                <ButtonCTA callback={deleteItem} text="Delete" className="delete" itemId={item.id} />
                <ButtonCTA callback={addToBag} className="move-to-active" text="Move to Active" itemId={item.id}  />
            </div>}/>)
        })}
   </div>)
}