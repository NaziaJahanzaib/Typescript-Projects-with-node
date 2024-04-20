"use strict";
function storeCarInfo(manufacturer, modelname, ...extraOption) {
    const carInfo = Object.assign({ manufacturer,
        modelname }, Object.assign({}, ...extraOption));
    return carInfo;
}
;
let answere = storeCarInfo('Honda', 'Civic', { color: 'black' }, { features: ['Navigation', 'Power window'] });
console.log(answere);
// let obj1 ={num1:1, num2:2}
// let obj2 ={num3:1, num2:5}
// let obj3 = Object.assign(obj1, obj2)
// console.log(obj3);
// function exampleFunc (...parem: string[]){
// console.log(parem)
// }
// exampleFunc('Zeeshan', 'Mani', 'Waqar')
