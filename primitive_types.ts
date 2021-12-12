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