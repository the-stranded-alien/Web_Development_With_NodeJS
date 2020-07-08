var x = 10;

function myFun() {
    x += 1;
}

myFun();
console.log(x);

var y = 10;
function myFunc() {
    var y = 20;
    y += 1;
    console.log(y);
    if(true) {
        // Fresh Scope Is Not Created Inside 'if'
        var y = 30;
        y += 1;
        console.log(y);
    }
    console.log(y)
}
myFunc();
console.log(y);

// 'var' -> Have Function Scope
// 'var' -> Don't Have Block Scope