import { Item } from "./Item"
import "./BagItems.css"
import { bagItemProps } from "../types"
import { DeleteCTA } from "./deleteCTA"

export const BagItems = ({items, deleteItem}: bagItemProps) => {
    return (
        <div className="bag-section">
            <h3>Active items</h3>
            {items.map((item: any, index: number) => {
                return (<Item key={index} itemName={item.itemName} id={item.id} inBag={true} actions={<div>
                    <DeleteCTA deleteItem={deleteItem} itemId={item.id} />
                    <button className="save-for-later">Save for later</button>
                </div>} />)
            })}
        </div>)
}