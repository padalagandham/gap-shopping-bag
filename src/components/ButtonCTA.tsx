
import { buttonProps } from "../types"

export const ButtonCTA = ({ callback, itemId, className, text }: buttonProps) => <button className={className} onClick={() => { callback(itemId) }}>{text}</button>
