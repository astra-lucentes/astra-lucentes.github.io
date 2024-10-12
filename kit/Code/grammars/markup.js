const markup = {
    "doctype": {
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: true,
        inside: {
            "internal-subset": {pattern: /(^[^\[]*\[)[\s\S]+(?=]>$)/, lookbehind: true, greedy: true, inside: null},
            "string": {pattern: /"[^"]*"|'[^']*'/, greedy: true},
            "punctuation": /^<!|>$|[[\]]/,
            "doctype-tag": /^DOCTYPE/i,
            "name": /[^\s<>'"]+/
        }
    },

    "cdata": {pattern: /<!\[CDATA\[[\s\S]*?]]>/gi, greedy: true},
    "comment": {pattern: /<!--(?:(?!<!--)[\s\S])*?-->/g, greedy: true},
    "prolog": {pattern: /<\?[\s\S]+?\?>/, greedy: true},

    "tag": {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: true,
        inside: {
            "tag-name": {alias: "keyword", pattern: /^<\/?[^\s>\/]+/, inside: {"punctuation": /^<\/?/, "namespace": /^[^\s>\/:]+:/}},
            "special-attr": [],
            "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                    "punctuation": [
                        {pattern: /^=/, alias: "attr-equals"},
                        {pattern: /^(\s*)["']|["']$/, lookbehind: true}
                    ]
                }
            },
            "punctuation": /\/?>/,
            "attr-name": {pattern: /[^\s>\/]+/, inside: {"namespace": /^[^\s>\/:]+:/}}
        }
    },

    "entity": [
        {pattern: /&[\da-z]{1,8};/i, alias: "named-entity"},
        /&#x?[\da-f]{1,8};/i
    ]
}


markup["tag"].inside["attr-value"].inside["entity"] = markup["entity"]
markup["doctype"].inside["internal-subset"].inside = markup

export default markup