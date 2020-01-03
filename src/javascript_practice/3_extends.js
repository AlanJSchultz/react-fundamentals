//jshint esversion:6

// ES6 JS Classes
class User {
    constructor (name) {
        this.name = name;
        this.type = "Trial User";
    }
    // Method 1
    greet() {
        console.log('Welcome back, ' + this.name);
    }
    // Method 2
    status() {
        console.log('Current Status: ' + this.type);
    }
}

//Extends
class TrialUser extends User {
    trialEnding () {
        console.log('Your trial will be ending soon, ' + this.name + '.' + ' Would you like to join our program?');
    }
}

//Instance of User Class
var anonDude = new User("Anonymous");
anonDude.greet(); // Welcome back, Anonymous
anonDude.status(); // Current Status: Trial User

//Instance of TrialUser class
var trialUser = new TrialUser("Paul");
trialUser.greet(); // Welcome back, Paul
trialUser.trialEnding(); // Your trial will be ending soon, Paul. Would you like to join our program?
trialUser.status(); // Current Status: Trial User


class BannedUser {
    constructor (name) {
        this.name = name;
        this.type = "Banned for conduct.";
    }
    greet () {
        console.log("No longer welcomed, " + this.name);
    }
    status () {
        console.log("Current Status: " + this.type);
    }
}
var badDude = new BannedUser("Bad Dude");
badDude.greet(); // No longer welcomed, Bad Dude
badDude.status(); // Current Status: Banned for conduct.

