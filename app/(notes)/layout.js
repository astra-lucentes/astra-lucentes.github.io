import { Article } from "@/kit/Layout";

export default function Layout({children}) {
  return (
    <>
      <Article>{children}</Article>
      <div style={{height: "5rem"}}/>
    </>
  )
}
