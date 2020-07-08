console.log((1 + "1") == 11) // True

console.log("11" - 1 == 1) // False
// "11" - 1, 11 Typecasts To Number 11, So 10
console.log("11" - 1 == 10)

// NaN -> Not A Number

console.log([] == "")
console.log([] == 0)
console.log(0 == "")

// String Can Be Typecast To 0
// [] Can Also Be Typecast To ""

console.log({} + [])
console.log([] + {})
