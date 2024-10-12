const keyword = new RegExp("\\b(?:" +
    /* Вспомогательные функции */ "asm|decltype|inline|noexcept|operator|sizeof|thread_local|typename" +
    /* Ключевые слова */          "class|case|catch|delete|do|if|else|enum|export|import|module|for|while|switch|struct|return|throw|try|" +
    /* Управляющие конструкции */ "break|continue|default|explicit|extern|final|goto|new|this|typedef|typeid" +
    /* Шаблоны */                 "concept|mutable|namespace|friend|override|private|protected|public|register|requires|static|template|" +
    /* Константы и типы */        "const|const_cast|consteval|constexpr|constinit|dynamic_cast|reinterpret_cast|static_assert|static_cast|volatile|" +
    /* Асинхронность и HL*/       "co_await|co_return|co_yield|union|usingvirtual" +
    ")\\b")

let cpp = {
    "comment": {pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: true},
    "string": {pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/, greedy: true},
    "char": {pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/, greedy: true},

    "number": {
        pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
        greedy: true
    },
    "boolean": /\b(?:false|true)\b/,

    "class-name": [
        {
            pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source
                .replace(/<keyword>/g, function () { return keyword.source })),
            lookbehind: true
        },
        /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
        /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
        /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/
    ],

    keyword: keyword,

    builtin: new RegExp("\\b(?:" +
        /* Макросы */      "alignas|alignof|" +
        /* Базовые типы */ "auto|bool|double|float|long|short|void|__attribute__|" +
        /**/               "char|char8_t|char16_t|char32_t|wchar_t|" +
        /**/               "int|signed|int8_t|int16_t|int32_t|int64_t|unsigned|uint8_t|uint16_t|uint32_t|uint64_t|" +
        /* Операторы */    "compl" +
        ")\\b"),

    object: /\b(?:vector|set|map|unordered_set|unordered_map|stack|queue|cin|cout)\b/,

    constant: /\b(?:nullptr|NULL)\b/,
    function: /\b[a-z_]\w*(?=\s*\()/i,

    operator: />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
    punctuation: /[{}[\];(),.:]/
}

cpp["macro"] = {
    pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: true,
    greedy: true,
    inside: {
        "string": [{pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: true}, cpp["string"]],
        "char": cpp["char"],
        "comment": cpp["comment"],
        "macro-name": [
            {pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: true},
            {pattern: /(^#\s*define\s+)\w+\b(?=\()/i, lookbehind: true, alias: "function"}
        ],
        "directive": {pattern: /^(#\s*)[a-z]+/, lookbehind: true},
        "directive-hash": /^#/,
        "punctuation": /##|\\(?=[\r\n])/,
        "expression": {pattern: /\S[\s\S]*/, inside: cpp}
    }
}

export default cpp