var version = `es6`
console.log(`hello ${version} TypeScript`);

var myString: string = `this is a string`;

//myString = 1

// basic types

var myboolean: boolean = true;
var myNumber: number = 1234;

var myStringArray: string[] = [`first`, `second`, `third`]
myStringArray.forEach(e => console.log(e))

myboolean = myNumber === 456;
myStringArray = [myNumber.toString(), "5678"];
myNumber = myStringArray.length;

console.log(`myBoolean = ${myboolean}`);
console.log(`myStringArray = ${myStringArray}`);
console.log(`myNumber = ${myNumber}`);

// inferred typing
var inferredString = "this is a string";
var inferredNumber = 1;

function calculate(a: number, b: number, c: number): number {
    return (a * b) + c;
}

console.log(`calculate() = ${calculate(3, 2, 1)}`);
