import "./Link.css"
import Link from "next/link"

export default ({to, colorless, download, filename, children}) => {
  if (to.includes('://'))
    return <a class={colorless ? 'colorless' : ''} {...download ? {download: filename} : {}} href={to}>{children}</a>
  else
    return <Link class={colorless ? 'colorless' : ''} href={to}>{children}</Link>
}


