import "./Layout.css"

export const Article = ({children}) => <article>{children}</article>

export const Header = ({children}) => (
  <header>
    <img src="/favicon.svg" alt="" role="presentation" />
    {children}
  </header>
)
