let c = {
    "comment": {pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: true},
    "string": {pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: true},
    "char": {pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/, greedy: true},

    "number": /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
    "boolean": /\b(?:false|true)\b/,

    "class-name": {
        pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
        lookbehind: true
    },

    "keyword": /\b(?:asm|break|case|const|continue|default|do|else|extern|for|goto|if|inline|register|return|sizeof|static|struct|switch|typedef|typeof|volatile|while)\b/,
    "builtin": /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|auto|char|double|enum|float|int|long|short|signed|union|unsigned|void)/,

    "constant": /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/,
    "function": /\b[a-z_]\w*(?=\s*\()/i,

    "operator": />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
    "punctuation": /[{}[\];(),.:]/
}

c["macro"] = {
    pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: true,
    greedy: true,
    inside: {
        "string": [{pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: true}, c["string"]],
        "char": c["char"],
        "comment": c["comment"],
        "macro-name": [
            {pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: true},
            {pattern: /(^#\s*define\s+)\w+\b(?=\()/i, lookbehind: true, alias: "function"}
        ],
        "directive": {pattern: /^(#\s*)[a-z]+/, lookbehind: true},
        "directive-hash": /^#/,
        "punctuation": /##|\\(?=[\r\n])/,
        "expression": {pattern: /\S[\s\S]*/, inside: c}
    }
}

export default c