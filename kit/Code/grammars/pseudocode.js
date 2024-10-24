const pseudocode = {
  string: {
    pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: true,
  },

  keyword:
    /\b(?:_(?=\s*:)|type|constructor|destructor|operator|property|private|and|as|assert|async|await|fork|gather|join|break|case|class|continue|function|method|del|else|except|finally|for|repeat|each|global|if|import|in|is|lambda|switch|not|or|pass|raise|return|try|while|with|yield)\b/,

  function: [
    {
      pattern: /((?:^|\s)(?:function|method)[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
      lookbehind: true,
    },
    {
      pattern: /[a-zA-Z]\w*(?=\s*\()/g,
    },
  ],

  
  "soft-keyword": /\b(?:self)\b/,

  object: /\b(?:memory_allocate|memory_free|memory_copy|memory_reallocate)\b/,

  builtin: /\b(?:len|int|float)\b/,
  type: /\b(?:static_array|dynamic_array|list-node|linked-list|heap|min_heap)\b/,
  "abstract-type": /\b(?:T|list|array|associative-array)\b/,

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
