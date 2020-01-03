//jshint esversion:6

// ES6 JS Classes
class User {
    constructor(name){
        this.name = name;
        this.type = "Trial User";
    }
    // Method 1
    greet(){
        console.log('Welcome back, ' + this.name);
    }
    // Method 2
    status(){
        console.log('Current status: ' + this.type);
    }
}

// Instance of the class/new object
var anonDude = new User("Anonymous dude");

// we can now use the instance and the . operator
// to access the 2 methods
anonDude.greet(); // Welcome back, Anonymous dude
anonDude.status(); // Current status: Trial User

// Another instance of the class
var anonLady = new User("Anonymous lady");
anonLady.greet(); // Welcome back, Anonymous lady
anonLady.status(); // Current status: Trial User

// Another instance of the class
var jeff = new User("Jeff");
jeff.greet(); // Welcome back, Jeff
jeff.status(); // Current status: Trial User

// challenge of 2 more
var hacker = new User("Hacker");
hacker.greet(); // Welcome back, Hacker
hacker.status(); // Current status: Trial User

var coder = new User("Coder");
coder.greet(); // Welcome back, Coder
coder.status(); // Current status: Trial User

