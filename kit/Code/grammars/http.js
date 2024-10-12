import uri from "@/kit/Code/grammars/uri.js"

const headerValueOf = name => RegExp("(^(?:" + name + "):[ \t]*(?![ \t]))[^]+", "i")

const http = {
    "request-line": {
        pattern: /^[A-Z]+\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,
        inside: {
            // HTTP Method
            "http-method-connect": {alias: "http-method", pattern: /^CONNECT\b/},
            "http-method-trace": {alias: "http-method", pattern: /^TRACE\b/},
            "http-method-delete": {alias: "http-method", pattern: /^DELETE\b/},
            "http-method-get": {alias: "http-method", pattern: /^(?:GET|HEAD|OPTIONS|SEARCH)\b/},
            "http-method-post": {alias: "http-method", pattern: /^POST\b/},
            "http-method-modify": {alias: "http-method", pattern: /^(?:PATCH|PUT)\b/},
            "http-method": /^[A-Z]+\b/,

            // Request Target e.g. http://example.com, /path/to/file
            "request-target": {
                pattern: /^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,
                lookbehind: true,
                alias: "url",
                inside: uri
            },

            // HTTP Version
            "http-version": {
                pattern: /^(\s)HTTP\/[\d.]+/,
                lookbehind: true,
            }
        }
    },
    "response-status": {
        pattern: /^HTTP\/[\d.]+ \d+ .+/m,
        inside: {
            // HTTP Version
            "http-version": {
                pattern: /^HTTP\/[\d.]+/,
                alias: "property"
            },
            // Status Code
            "status-code-info": {
                pattern: /^(\s)1\d+(?=\s)/,
                lookbehind: true,
                alias: "status-code"
            },
            "status-code-success": {
                pattern: /^(\s)2\d+(?=\s)/,
                lookbehind: true,
                alias: "status-code"
            },
            "status-code-redirect": {
                pattern: /^(\s)3\d+(?=\s)/,
                lookbehind: true,
                alias: "status-code"
            },
            "status-code-client-error": {
                pattern: /^(\s)4\d+(?=\s)/,
                lookbehind: true,
                alias: "status-code"
            },
            "status-code-server-error": {
                pattern: /^(\s)5\d+(?=\s)/,
                lookbehind: true,
                alias: "status-code"
            },
            // Reason Phrase
            "reason-phrase": {
                pattern: /^(\s).+/,
                lookbehind: true,
                alias: "string"
            }
        }
    },
    "header": {
        pattern: /^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,
        inside: {
            "header-value": [
                // {
                //     pattern: headerValueOf(/Content-Security-Policy/.source),
                //     lookbehind: true,
                //     alias: ["csp", "languages-csp"],
                //     inside: csp
                // },
                // {
                //     pattern: headerValueOf(/Public-Key-Pins(?:-Report-Only)?/.source),
                //     lookbehind: true,
                //     alias: ["hpkp", "languages-hpkp"],
                //     inside: hpkp
                // },
                // {
                //     pattern: headerValueOf(/Strict-Transport-Security/.source),
                //     lookbehind: true,
                //     alias: ["hsts", "languages-hsts"],
                //     inside: hsts
                // },
                {
                    pattern: headerValueOf(/[^:]+/.source),
                    lookbehind: true
                }
            ],
            "header-name": {
                pattern: /^[^:]+/,
                alias: "keyword"
            },
            "punctuation": /^:/
        }
    }
}

export default http