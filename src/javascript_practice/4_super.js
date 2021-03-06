//jshint esversion:6

//ES6 JS Classes
class User {
    constructor(username, password) {
        this.name = username;
        this.password = password;
        this.type = "Trial User";
    }
    // Method 1
    greet() {
        console.log('Welcome back, ' + this.name);
    }
    // Method 2
    status() {
        console.log('Current status: ' + this.type);
    }
}

// Instance of the class/new object
var anonDude = new User("Anonymous");
anonDude.greet(); // Welcome back, Anonymous
anonDude.status(); // Current status: Trial User

// super
class BronzeLevelUser extends User {
    // We add the ccinfo property to the user here.
    constructor(username, password, ccinfo) {
        // If you are going to use 'this' in your constructor, you
        // must have super that points to the parent constructor.
        super(username, password);
        // The 'this' keyword wouldn't work without super.
        this.type = "Bronze User";
        this.ccinfo = ccinfo;
    }
    getInfo(){
        console.log(this.name, this.password, this.type, this.ccinfo);
    }
}

var bronzeGuy = new BronzeLevelUser("Bronze Dude", "bronze7589", "4242424242424242");
bronzeGuy.greet(); // Welcome back, Bronze Dude
bronzeGuy.status(); // Current status: Bronze User
console.log(bronzeGuy);
/*
BronzeLevelUser {
    name: 'Bronze Dude',
    password: 'bronze7589',
    type: 'Bronze User',
    ccinfo: '4242424242424242'
}
*/
bronzeGuy.getInfo(); // Bronze Dude bronze7589 Bronze User 4242424242424242

