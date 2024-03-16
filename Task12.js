/*
12- Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name
*/

let names = ["Aitazaz Ahsan", "Haseeb Sajjad", "Saad Safi", "GC Habib Ur Rehman"];
let message = "Thank you for always being there for me, through thick and thin.";

//Use for loop to traverse through an array
for (let i = 0; i < names.length; i++)
{
    console.log(`${names[i]}! ${message}`);
}