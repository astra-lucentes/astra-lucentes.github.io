import "./Typography.css"

import {replaceSymbols} from "./utils"


export const Section = ({children}) => <section>{children}</section>

export const Heading = ({children}) => <h1>{children}</h1>
export const Subheading = ({children}) => <h2>{children}</h2>

export const P = ({children}) => <p>{replaceSymbols(children)}</p>
export const Par = ({children}) => <div className="par">{children}</div>

export const Weak = ({children}) => <span className="weak">{children}</span>
export const Decl = ({children}) => <span className="decl">{children}</span>

export const TaskHeading = ({title, children}) => (
  <div className="task-heading">
    <h1>{title}</h1>
    <p>{children}</p>
  </div>
)