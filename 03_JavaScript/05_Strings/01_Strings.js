// Strings Are Immutable
let str = "nashknkdsnak"
console.log(str)

console.log(str.indexOf("a"))
console.log(str.indexOf("a", 4))

console.log(str.substr(3))
console.log(str.substr(3, 5))

console.log(str.substring(3))
// Index Based
console.log(str.substring(3, 5))

console.log(str.slice(4, 5))

// Substring Doesn't Work For -ve Values
console.log(str.substring(-5, -3))
console.log(str.slice(-5, -3))

// Split
console.log(str.split("a"))
let url = "http:/youtube.com/watch?v=nknk2u1"
console.log(url.split("?"))
console.log(url.split("="))
console.log(url.split("=")[1])

