//jshint esversion:6

class User {
    constructor(first, last, e) {
        this.f = first;
        this.l = last;
        this.email = e;
    }
}

var userOne = new User("Paul", "O'Connor", "poconnor@elevenfifty.org");
console.log(userOne.first);  // undefined
console.log(userOne.f);  // Paul
console.log(userOne.l);  // O'Connor
console.log(userOne);  // User {f: "Paul", l: "O'Connor", email: "poconnor@elevenfifty.org"}


// practice - write a Car class with make, model, year
class Car {
    constructor(make, model, year) {
        this.mk = make;
        this.md = model;
        this.yr = year;
    }
}

var carOne = new Car("Chrysler", "Town and Country", "2001");
console.log(carOne.mk);  // Chrysler
console.log(carOne.md);  // Town and Country
console.log(carOne.yr); // 2001
console.log(carOne); // Car { mk: 'Chrysler', md: 'Town and Country', yr: '2001' }


// practice - write a Player class with three properties of name, number, and average points.

class Player {
    constructor (name, number, averagePoints) {
        this.name = name;
        this.number = number;
        this.averagePoints = averagePoints;
    }
}
var playerOne = new Player("Woods", 1, 66);
console.log(playerOne.name);  // Woods
console.log(playerOne.number);  // 1
console.log(playerOne.averagePoints);  // 66
console.log(playerOne); // Player { name: 'Woods', number: 1, averagePoints: 66 }

