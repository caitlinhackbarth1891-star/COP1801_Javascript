// Create and display the object literal
const myDog = {
    name: "Akamaru",
    breed: "Unknown",
    tvProgram: "Naruto",
    notes: "Kiba Inuzuka's ninja dog",
    mySound: "I may not talk, but my bark lets Kiba know what I am thinking!"
};

document.getElementById("literalDog").innerHTML =
    "Hello, my name is " + myDog.name +
    ". " + myDog.mySound +
    " I starred in the TV show " + myDog.tvProgram +
    ". My breed is listed as " + myDog.breed +
    ". I am " + myDog.notes + ".";


// Create a dog constructor
function Dog(name, breed, tvProgram, notes, mySound, canTalk) {
    this.name = name;
    this.breed = breed;
    this.tvProgram = tvProgram;
    this.notes = notes;
    this.mySound = mySound;
    this.canTalk = canTalk;

    // Create the greeting method
    this.myGreeting = function() {
        return "Hi! I'm " + this.name +
            " from " + this.tvProgram +
            ". I'm " + this.notes +
            ". My breed is listed as " + this.breed +
            ". I " + (this.canTalk ? "can talk." :
            "cannot talk, but I communicate through my bark!");
    };
}


// Create the object using the constructor
const myDogConst = new Dog(
    "Akamaru",
    "Unknown",
    "Naruto",
    "Kiba Inuzuka's ninja dog",
    "I may not talk, but my bark lets Kiba know what I am thinking!",
    false
);


// Call the object's greeting method
document.getElementById("constructorDog").innerHTML =
    myDogConst.myGreeting();