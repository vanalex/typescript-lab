class Car{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    name(){
        return this.name;
    }

    year(){
        return this.year;
    }

    age(x) {
        return x - this.year;
    }
}

let date = new Date();
let year = date.getFullYear();

let myCar = new Car("Ford", 2014);

let car1 = new Car("Ford", 2014)
console.log(car1.name, ' ', car1.year);
console.log(car1.age(year));