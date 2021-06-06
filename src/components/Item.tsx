import { ADD, ItemType, REMOVE } from '../types';
import './Item.css';

export const Item = ({ itemName, id, inBag, actions, count, updateItemCount }: ItemType) => {
    return (<div className="item-section">
        <div className="item-name">{itemName}</div>
        {inBag && <div className='input-group'>
            <input type="button" value="-" onClick={() => { updateItemCount && updateItemCount(REMOVE, id)}} className="button-minus" data-field="quantity" />
            <input type="number" step="1" max="" value={count} name="quantity" className="quantity-field" />
            <input type="button" value="+" onClick={() => { updateItemCount && updateItemCount(ADD, id)}} className="button-plus" data-field="quantity" />
        </div>}
        {actions && <div className="item-actions">
            {actions}
        </div>}
    </div>)
}