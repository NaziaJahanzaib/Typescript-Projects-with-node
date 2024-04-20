"use strict";
// Stages of Life: Write as if-else chain that determines a person's stage of life.
//Set a value for variable age, and then:
let age = 3;
// If the person is less than 2 years old, print a message that the person is a baby.
// If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
if (age < 2) {
    console.log("person is baby.");
}
else if (age >= 2 && age < 4) {
    console.log("person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("person is kid.");
}
else if (age >= 13 && age < 20) {
    console.log("person is a teenage.");
}
else if (age >= 20 && age < 65) {
    console.log("person is an adult.");
}
else {
    console.log("person is an elder.");
}
