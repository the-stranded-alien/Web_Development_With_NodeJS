let y = 10;
function myFunc() {
    let y = 20;
    y += 1;
    console.log(y);
    if(true) {
        let y = 30;
        y += 1;
        console.log(y);
    }
    console.log(y)
}
myFunc();
console.log(y);

// 'let' -> Have Function Scope
// 'let' -> Have Block Level Scoping
