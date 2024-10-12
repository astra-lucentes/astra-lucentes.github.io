import "./Typography.css"

const replaceSymbols = (children) => {
  if (typeof children === "string") {
    return children.replace(/(\s|^)--(\s|$)/g, "$1–$2")
  } else if (children instanceof Array) {
    return children.map(replaceSymbols)
  } else {
    return children
  }
}

export const Section = ({children}) => <section>{children}</section>

export const Heading = ({children}) => <h1>{children}</h1>
export const Subheading = ({children}) => <h2>{children}</h2>

export const P = ({children}) => <p>{replaceSymbols(children)}</p>
export const Par = ({children}) => <div className="par">{children}</div>

export const Weak = ({children}) => <span className="weak">{children}</span>
