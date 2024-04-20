
let current_users:string[] = ['Zeeshan','Waqae','Ali','Fahad','Younus'];
let new_users: string[] = ['Ali','Bilal','Fatima','Fahad'];

new_users.forEach(newUsername => {
 let loweCase: string = newUsername.toLowerCase();

 if(current_users.map(c_user => c_user.toLowerCase()).includes(loweCase))
{
console.log(`The username ${newUsername} is not available. Please write a differnt username`);
}
else{
    console.log(`The username ${newUsername} is available.`);
}
})