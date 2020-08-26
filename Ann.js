demoadd = function (a,b) { //anonymous functions
    return a+b
}
function demomul(a, b) { //anonymous functions
    return a * b
}

console.log(demoadd(1, 2));

//we can pass function as a parameter value

function demomath(c,d,act) {// act is a call back
    // switch (act) {
    //     case "add":
    //         return c+d
    //     case "mul":
    //         return c * d
    // }
    return act(c,d)
}

console.log(demomath(4, 5, demoadd));
console.log(demomath(4, 5, demomul));
console.log(demomath(4, 5, function (a,b) {
    return a-b
}));

