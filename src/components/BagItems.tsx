import { Item } from "./Item"
import "./BagItems.css"
import { bagItemProps } from "../types"
import { ButtonCTA } from "./ButtonCTA"

export const BagItems = ({items, deleteItem, addToList, updateItemCount}: bagItemProps) => {
    return (
        <div className="bag-section">
            <h3>Active items</h3>
            {items.map((item: any, index: number) => {
                return (<Item key={index} itemName={item.itemName} count={item.count} id={item.id} updateItemCount={updateItemCount} inBag={true} actions={<div>
                    <ButtonCTA callback={deleteItem} text="Delete" className="delete" itemId={item.id} />
                    <ButtonCTA callback={addToList} className="save-for-later" text="Save for later" itemId={item.id}  />
                </div>} />)
            })}
        </div>)
}