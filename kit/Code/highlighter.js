const Token = function (type, content, alias, matchedStr) {
  this.type = type
  this.content = content
  this.alias = alias
  this.length = (matchedStr || "").length | 0
}

const LinkedList = function () {
  let head = {value: null, prev: null, next: null}
  let tail = {value: null, prev: head, next: null}
  head.next = tail

  this.head = head
  this.tail = tail
  this.length = 0
}

const addAfter = (list, node, value) => {
  let next = node.next

  let newNode = {value: value, prev: node, next: next}
  node.next = newNode
  next.prev = newNode
  list.length++

  return newNode
}

const removeRange = (list, node, count) => {
  let i
  let next = node.next
  for (i = 0; i < count && next !== list.tail; i++) {
    next = next.next
  }

  node.next = next
  next.prev = node
  list.length -= i
}

const toArray = (list) => {
  let array = []
  let node = list.head.next
  while (node !== list.tail) {
    array.push(node.value)
    node = node.next
  }

  return array
}

const matchPattern = (pattern, pos, text, lookbehind) => {
  pattern.lastIndex = pos
  let match = pattern.exec(text)
  if (match && lookbehind && match[1]) {
    var lookbehindLength = match[1].length
    match.index += lookbehindLength
    match[0] = match[0].slice(lookbehindLength)
  }
  return match
}

const matchGrammar = (
  text,
  tokenList,
  grammar,
  startNode,
  startPos,
  rematch
) => {
  for (let token in grammar) {
    if (!grammar.hasOwnProperty(token) || !grammar[token]) {
      continue
    }

    let patterns = grammar[token]
    patterns = Array.isArray(patterns) ? patterns : [patterns]

    for (let j = 0; j < patterns.length; ++j) {
      if (rematch && rematch.cause === token + "," + j) {
        return
      }

      let patternObj = patterns[j]
      let inside = patternObj.inside
      let lookbehind = !!patternObj.lookbehind
      let greedy = !!patternObj.greedy
      let alias = patternObj.alias

      if (greedy && !patternObj.pattern.global) {
        var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0]
        patternObj.pattern = RegExp(patternObj.pattern.source, flags + "g")
      }

      var pattern = patternObj.pattern || patternObj

      for (
        let currentNode = startNode.next, pos = startPos;
        currentNode !== tokenList.tail;
        pos += currentNode.value.length, currentNode = currentNode.next
      ) {
        if (rematch && pos >= rematch.reach) {
          break
        }

        let str = currentNode.value

        if (tokenList.length > text.length) {
          return
        }

        if (str instanceof Token) {
          continue
        }

        var removeCount = 1
        var match

        if (greedy) {
          match = matchPattern(pattern, pos, text, lookbehind)
          if (!match || match.index >= text.length) {
            break
          }

          var from = match.index
          var to = match.index + match[0].length
          var p = pos

          p += currentNode.value.length
          while (from >= p) {
            currentNode = currentNode.next
            p += currentNode.value.length
          }
          p -= currentNode.value.length
          pos = p

          if (currentNode.value instanceof Token) {
            continue
          }

          for (
            let k = currentNode;
            k !== tokenList.tail && (p < to || typeof k.value === "string");
            k = k.next
          ) {
            removeCount++
            p += k.value.length
          }
          removeCount--

          str = text.slice(pos, p)
          match.index -= pos
        } else {
          match = matchPattern(pattern, 0, str, lookbehind)
          if (!match) {
            continue
          }
        }

        var from = match.index
        var matchStr = match[0]
        var before = str.slice(0, from)
        var after = str.slice(from + matchStr.length)

        var reach = pos + str.length
        if (rematch && reach > rematch.reach) {
          rematch.reach = reach
        }

        var removeFrom = currentNode.prev

        if (before) {
          removeFrom = addAfter(tokenList, removeFrom, before)
          pos += before.length
        }

        removeRange(tokenList, removeFrom, removeCount)

        var wrapped = new Token(
          token,
          inside ? tokenize(matchStr, inside) : matchStr,
          alias,
          matchStr
        )
        currentNode = addAfter(tokenList, removeFrom, wrapped)

        if (after) {
          addAfter(tokenList, currentNode, after)
        }

        if (removeCount > 1) {
          var nestedRematch = {
            cause: token + "," + j,
            reach: reach,
          }
          matchGrammar(
            text,
            tokenList,
            grammar,
            currentNode.prev,
            pos,
            nestedRematch
          )

          if (rematch && nestedRematch.reach > rematch.reach) {
            rematch.reach = nestedRematch.reach
          }
        }
      }
    }
  }
}

export const tokenize = (text, grammar) => {
  let rest = grammar.rest
  if (rest) {
    for (let token in rest) {
      grammar[token] = rest[token]
    }

    delete grammar.rest
  }

  let tokenList = new LinkedList()
  addAfter(tokenList, tokenList.head, text)

  matchGrammar(text, tokenList, grammar, tokenList.head, 0)

  return toArray(tokenList)
}

const escape = (s) => {
  let lookup = {
    "&": "&amp;",
    '"': "&quot;",
    "'": "&apos;",
    "<": "&lt;",
    ">": "&gt;",
  }
  return s.replace(/[&"'<>]/g, (c) => lookup[c])
}

export const highlight = (tokens) => {
  if (tokens instanceof Array) {
    return tokens.map(highlight).join("")
  } else if (tokens instanceof Token) {
    if (tokens.alias) {
      return `<span class="${tokens.alias} ${tokens.type}">${highlight(
        tokens.content
      )}</span>`
    } else {
      return `<span class="${tokens.type}">${highlight(tokens.content)}</span>`
    }
  } else return escape(tokens)
}
