
//Write a program that creates objects containing these items.

// let person_Name :string = 'Taha';

//example of string and number
// const personName_Array :(string | number)[] = ['Jahanzaib', 7, 'Waqar'];

// const personName_Array :string[] = ['Person', 'Car', 'Cold Drink'];

//Datatype person object
interface person {
    age : number,
    name : string,
    nationality : string,
    Student : Boolean
}

//person object
let person :person = {
    age : 26 ,
    name : 'Taha',
    nationality : 'Pakistan',
    Student : true
}

//print person
console.log(person)


//data type of Airplane object
interface airplane {
    model : number,
    company : string,
    pax_capacity : number,
    automatic : boolean,

    


}

//Airplane object
    let airplane = {
    model : 2024,
    company : 'Boeing',
    pax_capacity : 365,
    automatic : true,
}
console.log(airplane);