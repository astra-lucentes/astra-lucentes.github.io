import "./Codeblocks.css"
import {lazy, memo} from "react"

import * as grammars from "./grammars"
import {highlight, tokenize} from "./highlighter"

import {CopyButton} from "@/kit/Elements"

const InternalCode = memo(({language, code}) => {
  const grammar = grammars[language]
  let html = language ? highlight(tokenize(code, grammar)) : code

  if (language == 'pseudocode')
    html = html
      .replaceAll('<span class="operator">^</span><span class="operator">-</span><span class="number">1</span>', '<sup>-1</sup>')
      .replaceAll(/(\s|\n)<span class=\"operator\">\*<\/span>(\S.*?\S)<span class=\"operator\">\*<\/span>(\s|\n)/g, '$1<b>$2</b>$3')

  return (
    <code
      className={`language-${language}`}
      dangerouslySetInnerHTML={{__html: html}}
    />
  )
})

export const Code = ({language, children, copyable = false}) => (
  <span className="code">
    <InternalCode language={language} code={children} />
    {copyable && <CopyButton text={children} />}
  </span>
)

export const Codeblock = ({language, children}) => (
  <div className="codeblock">
    <InternalCode language={language} code={children} />
    <CopyButton text={children} />
  </div>
)

export const Pseudocode = ({children}) => (
  <div className="codeblock">
    <InternalCode language="pseudocode" code={children} />
    <CopyButton text={children} />
  </div>
)

export const HTTPStatus = ({status, reason}) => {
  const type =
    status < 200
      ? "info"
      : status < 300
        ? "success"
        : status < 400
          ? "redirect"
          : status < 500
            ? "client-error"
            : "server-error"

  return (
    <code className="http-status">
      <span className={`status-code status-code-${type}`}>{status}</span>{" "}
      <span className="reason-phrase">{reason}</span>
    </code>
  )
}
