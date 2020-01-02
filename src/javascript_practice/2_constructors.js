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
