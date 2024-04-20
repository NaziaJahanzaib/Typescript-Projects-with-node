"use strict";
let magicians = ['Zeeshan', 'Younus', "Mani", "Waqar"];
function copyArray(arr) {
    return [...arr];
}
function make_great(magiciansArray) {
    for (let i = 0; i < magiciansArray.length; i++) {
        magiciansArray[i] = 'the Great ' + magiciansArray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
const copyMagicianArray = copyArray(magicians);
make_great(copyMagicianArray);
console.log('This is my orignal array');
show_magicians(magicians);
console.log('This is my modified copy of the array');
show_magicians(copyMagicianArray);
