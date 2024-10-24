import "./Lists.css"

import {replaceSymbols} from "./utils"


export const EnumList = ({tight = false, children}) => <ol className={tight ? "tight" : ""}>{children}</ol>
export const BulletList = ({tight = false, children}) => <ul className={tight ? "tight" : ""}>{children}</ul>
export const Item = ({children}) => <li><p>{children}</p></li>
