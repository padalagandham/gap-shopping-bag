import './Item.css';

type itemProps = {
    itemName: string
    id: number
    inBag: boolean
    actions: string | null
}

export const Item = ({ itemName, id, inBag, actions }: any) => {
    return (<div className="item-section">
        <div className="item-name">{itemName}</div>
        {inBag && <div className='input-group'>
            <input type="button" value="-" className="button-minus" data-field="quantity" />
            <input type="number" step="1" max="" value="1" name="quantity" className="quantity-field" />
            <input type="button" value="+" className="button-plus" data-field="quantity" />
        </div>}
        {actions && <div className="item-actions">
            {actions}
        </div>}
    </div>)
}