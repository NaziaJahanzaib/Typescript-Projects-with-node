"use strict";
//Store the Locations in a array. Make sure the array is not in alphabatical order.
let places = [`Karachi`, `Lohore`, `Islamabad`, `Peshawar`, `Multan`];
//Print your array in its orignal order.
console.log('Orignal ' + places);
//Print your array in alphabatical order without modifying the actual list.
console.log('copy ' + [...places].sort());
//show that your array is still in its orignal order by printing it.
console.log('Orignal ' + places);
//print your array in reverse alphabatical order without changing the order of the orignal list.
console.log('Copy ' + [...places].sort().reverse());
//show that your array is still in its orignal order by printing it again.
console.log('Orignal ' + places);
//Reverse the order of your list. Print the array to show that its order has changed.
console.log('Orignal ' + places.reverse());
//Reverse the order of your list again. Print the list to show it's back to its orignal order.
console.log('Orignal ' + places.reverse());
//Sort your array so it's stored in alphabatical order. Print the array to show that its order has been changed.
console.log('Orignal ' + places.sort());
// Sort to change your array so it's stored in reverse alphabatical order. Print the list show that its order has changed.
console.log('Orignal ' + places.sort().reverse());
