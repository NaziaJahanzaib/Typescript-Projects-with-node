"use strict";
let current_users = ['Zeeshan', 'Waqae', 'Ali', 'Fahad', 'Younus'];
let new_users = ['Ali', 'Bilal', 'Fatima', 'Fahad'];
new_users.forEach(newUsername => {
    let loweCase = newUsername.toLowerCase();
    if (current_users.map(c_user => c_user.toLowerCase()).includes(loweCase)) {
        console.log(`The username ${newUsername} is not available. Please write a differnt username`);
    }
    else {
        console.log(`The username ${newUsername} is available.`);
    }
});
