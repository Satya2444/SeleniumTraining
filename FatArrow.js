let xa = [10,20,30,40,50,60,1,2,3];

v = xa.filter(function (val) {
    return val<30
})

v1 = xa.filter(val => val < 30)

console.log(v);
// fat arrow functions

// no parameter function
// () => return value;
f = () => console.log(' f called');
f()
// single parameter function
f1 = (p1) => console.log(p1+' is the value');

f1('hello')

f11 = p1 => console.log(p1 + ' is the value');
f11('hello again')
// multi parameter function
f2 = (a,b)=> a+b;
console.log(f2(10, 200));
// multi parameter function with multi line
f22 = (a, b) => {
    console.log('this is multi');
    console.log('this is multiline');
};
f22(1,2)
