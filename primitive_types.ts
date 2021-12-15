var item1 = {id:1, name:"item1"} as any
item1 = {id: 2};

let index: number = 0;

if (index == 0) {
    // var index: number = 2;
    let index: number = 2;
    console.log(`index = ${index}`);
}

console.log(`index = ${index}`);

const constValue = "this should not be changed";
//constValue = "updated";

//
// Union types
//

function printObject(obj: string | number) {
    console.log(`obj = ${obj}`);
}

printObject(1);
printObject("string value");

//
// type guards
//

function addWithUnion(
    arg1: string | number,
    arg2: string | number
) {
    // return arg1 + arg2;
}

function addWithTypeGuard(
    arg1: string | number,
    arg2: string | number
) {
    if (typeof arg1 === "string") {
        // arg 1 is treated as a string
        console.log(`arg1 is of type string`);
        return arg1 + arg2;
    }
    if (typeof arg1 === "number" && typeof arg2 === "number") {
        // both are numbers
        console.log(`arg1 and arg2 are numbers`);
        return arg1 + arg2;
    }
    console.log(`default return treat both as strings`)
    return arg1.toString() + arg2.toString();
}

console.log(` "1", "2" = ${addWithTypeGuard("1", "2")}`);
console.log(`  1 ,  2  = ${addWithTypeGuard(1, 2)}`);
console.log(`  1 , "2" = ${addWithTypeGuard(1, "2")}`);

type StringOrNumber = string | number;

function addWithTypeAlias(
    arg1: StringOrNumber,
    arg2: StringOrNumber
) {
    return arg1.toString() + arg2.toString();
}

// 
// enums
//

enum DoorState {
    Open,
    Closed
}

function checkDoorState(state: DoorState) {
    console.log(`enum value is : ${state}`);
    switch (state) {
        case DoorState.Open:
            console.log(`Door is open`);
            break;
        case DoorState.Closed:
            console.log(`Door is closed`);
            break;
    }
}

checkDoorState(DoorState.Open);
checkDoorState(DoorState.Closed);

enum DoorStateSpecificValues {
    Open = 3,
    Closed = 7,
    Unspecified = 256
}

//
// string enums
//

enum DoorStateString {
    OPEN = "Open",
    CLOSED = "Closed"
}

console.log(`OPEN = ${DoorStateString.OPEN}`);

//
// const enums
//

const enum DoorStateConst {
    Open = 10,
    Closed = 20
}

console.log(`const Closed = ${DoorStateConst.Open}`);


// 
// Undefined
// 

let array = ["123", "456", "789"];

delete array[0];

for (let i = 0; i < array.length; i++) {
    // console.log(`array[${i}] = ${array[i]}`);
    checkAndPrintElement(array[i]);
}

function checkAndPrintElement(arrElement: string | undefined) {
    if (arrElement === undefined)
        console.log(`invalid array element`);
    else
        console.log(`valid array element : ${arrElement}`);
}
