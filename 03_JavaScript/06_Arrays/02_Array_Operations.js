let arr = [1, 2, 3]
console.log(arr.join("-"))

let ar1 = [1,2,3,4,5,6,8,9]

console.log(ar1.slice(4, 5))
console.log(ar1)

// Splice Change Original Array
console.log(ar1.splice(4, 5))
console.log(ar1)

let array = [1, 2, 3, 4, 5]
console.log(array[5])
array[5] = 10
console.log(array[5])
console.log(array)

// JS Arrays Can Have Some Slots
array[15] = 6 // Creates Empty Slots
console.log(array)
console.log(array.length)
console.log(array[12])