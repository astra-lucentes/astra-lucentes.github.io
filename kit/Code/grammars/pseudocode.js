const pseudocode = {
  string: {
    pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: true,
  },
  keyword:
    /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|function|del|else|except|finally|for|each|from|global|if|import|in|is|lambda|switch|not|or|pass|raise|return|try|while|with|yield)\b/,

  builtin: /\b(?:len)\b/,
  type: /\b(?:heap|min_heap)\b/,

  boolean: /\b(?:false|none|true|undefined)\b/,
  "special-boolean": {
    pattern: /⌀/u,
    alias: "boolean",
  },
  number:
    /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
  "special-number": {
    pattern: /∞/u,
    alias: "number",
  },
  operator: /[-+@%=]=?|!=|:=|\*\*?=?|\/\/?=?|>>=|<[<=>]?|>[=>]?|[&|^~]|∈/,
  punctuation: /[{}[\];(),.:]/,
}

export default pseudocode
