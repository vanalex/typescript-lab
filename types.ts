let counter: number;

counter = 1;

console.log('counter: ', counter)

let personName: string = 'John';
let age: number = 25;
let active: boolean = true;

let names: string[] = ['John', 'Jane', 'Peter', 'David', 'Mary'];

names.forEach(name => console.log(name));

let greeting : (name: string) => string;

greeting = function (name: string) {
    return `Hi ${name}`;
};

console.log('greeting: ', greeting('alex'))

let sum = function (num1: number, num2: number){
    return num1 + num2;
}

console.log(sum(4, 5))