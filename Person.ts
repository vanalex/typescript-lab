class Person{
    name: string = ''
    age: number = 0

    greetings(){
        return this.name + ' ' + this.age
    }
}

const person1: any = new Person()
person1.name = 'John Doe'
person1.age = 36
console.log(person1.greetings())
