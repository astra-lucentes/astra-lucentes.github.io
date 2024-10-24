export const replaceSymbols = (children) => {
  if (typeof children === "string") {
    return children.replace(/(\s|^)--(\s|$)/g, "$1–$2")
  } else if (children instanceof Array) {
    return children.map(replaceSymbols)
  } else {
    return children
  }
}