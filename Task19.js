/*
19- Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
*/

let Guests = ["Haseeb Sajjad", "Aitazaz Ahsan", "Usman Khalid", "Taha Tanveer"];
console.log(`I am inviting ${Guests.length} people to dinner. The following are their names:`);
for (let i = 0; i < Guests.length; i++)
{
    console.log(`${i + 1}- ${Guests[i]}`);
}