// Alien colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

let alienColors: string = "green";

// If the alien is green, print a message that the player earned 5 points.

if (alienColors === "green"){
    console.log("player earned 5 points.");
 }
 else if(alienColors === "yellow")
 {
    console.log("player earned 10 points.");
 }
 else if(alienColors === "red") {
    console.log("player earned 15 points.");
 }
 else {
    console.log("Please select right color")
 }
 alienColors = "yellow";
 if (alienColors === "green"){
    console.log("player earned 5 points.");
 }
 else if(alienColors === "yellow")
 {
    console.log("player earned 10 points.");
 }
 else if(alienColors === "red") {
    console.log("player earned 15 points.");
 }
 else {
    console.log("Please select right color")
 }
 alienColors = "red";
 if (alienColors === "green"){
    console.log("player earned 5 points.");
 }
 else if(alienColors === "yellow")
 {
    console.log("player earned 10 points.");
 }
 else if(alienColors === "red") {
    console.log("player earned 15 points.");
 }
 else {
    console.log("Please select right color")
 }