
import "./Header.css"
type deleteProps = {
    deleteItem: (id: number) => void
    itemId: number
}

export const DeleteCTA = ({ deleteItem, itemId }: deleteProps) => <button className="delete" onClick={() => { deleteItem(itemId) }}>Delete</button>
