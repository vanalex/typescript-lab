class Animal{
    constructor(name){
        this.name = name;
    }
}

class Alligator extends Animal{}

const jack = new Alligator('jack');

console.log('name -> ', jack.name);

let animal = new Animal
let mammal = Object.create(animal)
let human = Object.create(mammal)
let you = Object.create(human)