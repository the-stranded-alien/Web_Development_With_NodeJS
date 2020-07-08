let obj = {
    a: 10,
    b: "Hello",
    c: true
}

// 'a', 'b', 'c' Are Properties Of The 
// Object 'obj' And Each Property
// Has A Value

console.log(obj)
console.log(typeof obj)

console.log(obj.b)

let obj2 = {
    a: 10,
    b: "Hello",
    c: true,
    d: {
        p: 10,
        q: 20,
        r: {
            x: 100,
            y: 100
        }
    }
}

console.log(obj2)
console.log(obj2.d.r.x)

// Adding Property To Object
obj.l = 111111;
console.log(obj)

// Only Public Properties
// Nothing Is Private
// Nothing To Do With Object Oriented Programming
// JS Objects Are Just Bag Of Data.

// Removes Properties
delete obj.l
console.log(obj)
