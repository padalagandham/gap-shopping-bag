
type headerProps  = {
    itemsCount: string
}

export const Header = ({itemsCount}:headerProps) => {
    return (<div className="bag-count">
        {itemsCount}
    </div>)
}