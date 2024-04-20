"use strict";
let Guest_List = ['Nazia', `Abiha`, `Manahal`, `Zonesha`];
// for(let i=0; i<Guest_List.length; i++){
//     console.log(`Dear Miss. ` +Guest_List[i] + `,\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n`)
// }
let absent_Guest = `Nazia`;
let new_Guest = `Salma`;
Guest_List[0] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log(`Dear Miss. ` + Guest_List[i] + `,\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n`);
}
console.log(`Mr. ${absent_Guest} is not coming to the party.`);
console.log('Good News! we find big Table so we are inviting three more guests.');
Guest_List.unshift('Faizan');
Guest_List.splice(2, 0, 'Wikki');
Guest_List.push('Rizwan');
for (let i = 0; i < Guest_List.length; i++) {
    console.log(`Dear Miss. ` + Guest_List[i] + `,\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n`);
}
