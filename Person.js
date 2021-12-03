var Person = /** @class */ (function () {
    function Person() {
        this.name = '';
        this.age = 0;
    }
    Person.prototype.greetings = function () {
        return this.name + ' ' + this.age;
    };
    return Person;
}());
var person1 = new Person();
person1.name = 'John Doe';
person1.age = 36;
console.log(person1.greetings());
//# sourceMappingURL=Person.js.map