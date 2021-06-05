
import "./Header.css"
type headerProps  = {
    itemsCount: number
}

export const Header = ({itemsCount}:headerProps) => {
    return (<div className="header-section">
    <h4>Gap Shopping bag</h4>
    <div className="bag-count">
        {itemsCount} Items
    </div></div>)
}