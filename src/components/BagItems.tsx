import { Item } from "./Item"
import "./BagItems.css"

type bagItemProps = {
    items: []
}

export const BagItems = ({ items }: any) => {

    return (
        <div className="bag-section">
            <h3>Active items</h3>
            {items.length}
            {items.map((item: any, index: number) => {
                return (<Item key={index} itemName={item.itemName} id={item.id} inBag={true} actions={<div>
                    <button className="delete">Delete</button>
                    <button className="save-for-later">Save for later</button>
                </div>} />)
            })}
        </div>)
}