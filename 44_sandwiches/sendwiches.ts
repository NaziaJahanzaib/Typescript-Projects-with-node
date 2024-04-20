
function makeSandwiches (item: string[]) {
    console.log('Making your sandwich with:');

    item.forEach(element => console.log("- " + element));

console.log('Enjoy your sandwich');
}

makeSandwiches(['Ham', 'Cheese', 'lettuce']);

makeSandwiches(['Turkey', 'Bacon']);

makeSandwiches(['Peanut butter','Jelly']);