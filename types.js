var counter;
counter = 1;
console.log('counter: ', counter);
var personName = 'John';
var age = 25;
var active = true;
var names = ['John', 'Jane', 'Peter', 'David', 'Mary'];
names.forEach(function (name) { return console.log(name); });
var greeting;
greeting = function (name) {
    return "Hi ".concat(name);
};
console.log('greeting: ', greeting('alex'));
var sum = function (num1, num2) {
    return num1 + num2;
};
console.log(sum(4, 5));
//# sourceMappingURL=types.js.map