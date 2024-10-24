import {Codeblock} from "@/kit/Code"
import "./layout.css"

import {Article} from "@/kit/Layout"

export default function Layout({children}) {
  return (
    <>
      <div className="task-layout">
        {children}
        {/* <div className="solution-code">
          <Codeblock>{`helloworld\n\n\n\n\n\n\n`}</Codeblock>
        </div> */}
      </div>
    </>
  )
}
