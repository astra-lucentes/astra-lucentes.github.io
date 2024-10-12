import './Math.css'

import KaTeX from "katex"

import {useMemo} from "react"

const options = {
  throwOnError: false,
  trust: true,
  strict: false,
  macros: {
    "\\b": "\\big",
    "\\bl": "\\bigl",
    "\\br": "\\bigr",
    "\\bb": "\\Big",
    "\\bbl": "\\Bigl",
    "\\bbr": "\\Bigr",
    "\\bbb": "\\bigg",
    "\\bbbl": "\\biggl",
    "\\bbbr": "\\biggr",
    "\\l": "\\left",
    "\\r": "\\right",
    "\\lint": "\\mathop{\\large{\\int}}",

    "\\without": "\\setminus",
    "\\sect": "\\cap",
    "\\union": "\\cup",
    "\\sunion": "\\sqcup",
    "\\compose": "\\mathbin{\\footnotesize{\\boldsymbol{{\\circ}}}}",
    "\\dot": "\\cdot",

    "\\uniform": "\\operatorname{uniform}",

    "\\cl": "\\operatorname{cl}",
    "\\int": "\\operatorname{int}",
    "\\ord": "\\operatorname{ord}",

    "\\im": "\\operatorname{im}",
    "\\inv": "\\operatorname{inv}",
    "\\gcd": "\\!\\operatorname{НОД}",
    "\\lcm": "\\!\\operatorname{НОК}",
    "\\dom": "\\operatorname{dom}",

    "\\GL": "\\mathrm{GL}",
    "\\SL": "\\mathrm{SL}",
    "\\SO": "\\mathrm{SO}",

    "\\Aut": "\\operatorname{Aut}",
    "\\Out": "\\operatorname{Out}",
    "\\Inn": "\\operatorname{Inn}",
    "\\CPAut": "\\operatorname{CPAut}",

    "\\defeq": "\\stackrel{\\tiny{\\mathrm{def}}}{=}",
    "\\acts": "\\mathrel{\\raisebox{0.15em}{$\\curvearrowright$}}",
    "\\isom": "\\cong",
    "\\nisom": "\\ncong",
    "\\divby":
      "\\mathop{\\htmlStyle{font-weight: 500;}{\\raisebox{-0.5pt}{$\\footnotesize\\vdots$}}}",
    "\\divides": "\\mid",
    "\\notdivides": "\\nmid",

    "\\oo": "\\infty",
    "\\nothing": "\\varnothing",
    "\\vphi": "\\phi",
    "\\phi": "\\varphi",
    "\\vepsilon": "\\epsilon",
    "\\epsilon": "\\varepsilon",
    "\\inf": "\\mathop{\\mathrm{inf}\\vphantom{\\mathrm{p}}}\\limits",

    "\\A": "\\mathrm{A}",
    "\\B": "\\mathrm{B}",
    "\\C": "\\mathrm{C}",
    "\\D": "\\mathrm{D}",
    "\\E": "\\mathrm{E}",
    "\\F": "\\mathrm{F}",
    "\\G": "\\mathrm{G}",
    "\\H": "\\mathrm{H}",
    "\\I": "\\mathrm{I}",
    "\\J": "\\mathrm{J}",
    "\\K": "\\mathrm{K}",
    "\\L": "\\mathrm{L}",
    "\\M": "\\mathrm{M}",
    "\\N": "\\mathrm{N}",
    "\\O": "\\mathrm{O}",
    "\\P": "\\mathrm{P}",
    "\\Q": "\\mathrm{Q}",
    "\\R": "\\mathrm{R}",
    "\\S": "\\mathrm{S}",
    "\\T": "\\mathrm{T}",
    "\\U": "\\mathrm{U}",
    "\\V": "\\mathrm{V}",
    "\\W": "\\mathrm{W}",
    "\\X": "\\mathrm{X}",
    "\\Y": "\\mathrm{Y}",
    "\\Z": "\\mathrm{Z}",

    "\\NN": "\\mathbb{N}",
    "\\ZZ": "\\mathbb{Z}",
    "\\QQ": "\\mathbb{Q}",
    "\\RR": "\\mathbb{R}",
    "\\CC": "\\mathbb{C}",
    "\\HH": "\\mathbb{H}",
    "\\EE": "\\mathbb{E}",
    "\\FF": "\\mathbb{F}",

    "\\bA": "\\mathbf{A}",
    "\\bE": "\\mathbf{E}",
    "\\bL": "\\mathbf{L}",
    "\\bF": "\\mathbf{F}",
    "\\bH": "\\mathbf{H}",
    "\\bM": "\\mathbf{M}",
    "\\bS": "\\mathbf{S}",
    "\\bD": "\\mathbf{D}",

    "\\AAA": "\\mathcal{A}",
    "\\LLL": "\\mathcal{L}",
    "\\FFF": "\\mathcal{F}",
    "\\HHH": "\\mathcal{H}",
    "\\MMM": "\\mathcal{M}",
    "\\SSS": "\\mathcal{S}",
    "\\DDD": "\\mathcal{D}",

    "\\weak": "\\textcolor{gray}{#1}",

    "\\pmatrix": "\\begin{pmatrix}#1\\end{pmatrix}",
  },
}

const createMathComponent = (Component, display) => {
  const MathComponent = ({children, m}) => {
    const formula = children ?? m

    const html = useMemo(() => {
      try {
        const html = KaTeX.renderToString(
          formula
            .replaceAll('\u000c', ' ')
            .replaceAll(/\^-1($|[^a-zA-Z0-9])/g, "^{-1}$1")
            .replaceAll(/\\tx\{(.*?)\}\s*\,/g, "\\tx{$1}\\!,")
            .replaceAll("<->", "\\leftrightarrow")
            .replaceAll("<=>", "\\Leftrightarrow")
            .replaceAll("<==>", "\\Longleftrightarrow") // TODO: сделать чуть короче
            .replaceAll("=>", "\\,\\Rightarrow\\,")
            .replaceAll("|->", "\\mapsto")
            .replaceAll("->", "\\to ")
            .replaceAll("!=", "\\neq ")
            .replaceAll("==", "\\,=\\, ")
            .replaceAll(">=", "\\geqslant ")
            .replaceAll("<=", "\\leqslant ")
            .replaceAll("<|", "\\vartriangleleft ")
            .replaceAll("|>", "\\vartriangleright ")
            .replaceAll("\\sum", "\\sum\\limits")
            .replaceAll("\\max", "\\max\\limits")
            .replaceAll(/ d([a-zA-Z])($|[^a-zA-Z])/g, "\\, d$1$2")
            .replaceAll(/_\{(.*?)\\in (.*?)\}/g, "_{$1\\;\\!\\in\\;\\!$2}"),
          {displayMode: display, ...options}
        )
        return html
      } catch (error) {
        if (error instanceof KaTeX.ParseError || error instanceof TypeError)
          return ""
        throw error
      }
    }, [formula])

    return <Component html={html} />
  }

  return MathComponent
}

const InternalMath = ({html}) => (
  <span dangerouslySetInnerHTML={{__html: html}} />
)
const InternalDisplay = ({html}) => (
  <div className="math-display" dangerouslySetInnerHTML={{__html: html}} />
)

export const Math = createMathComponent(InternalMath, false)
export const Display = createMathComponent(InternalDisplay, true)
