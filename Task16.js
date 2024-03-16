/*
16- More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
*/

let Guests = ["Haseeb Sajjad", "Aitazaz Ahsan", "Usman Khalid"];
console.log(`Guests list with messages for dinner party is as follows:
1- Hey ${Guests[0]}, let's catch up over a delicious dinner at our place!
2- Mr ${Guests[1]}! let's get together for dinner and reminisce about old times.
3- ${Guests[2]}! we're having a dinner party, and we'd be thrilled if you could make it.`);

console.log(`\nGuest who can't make it:
${Guests[2]} will not join us for dinner party because he has some important commitments.`);
Guests.splice(2, 1, "Taha Tanveer");

console.log(`\nUpdated Guests list with messages is as follows:
1- Hey ${Guests[0]}, let's catch up over a delicious dinner at our place!
2- Mr ${Guests[1]}! let's get together for dinner and reminisce about old times.
3- ${Guests[2]}! we're having a dinner party, and we'd be thrilled if you could make it.`);

console.log("\nExciting News! We have found a bigger dinner table, so we will add three more guests in our list.");

Guests.unshift("Saad Safi");                            //Adding element at beginning of an array
Guests.splice(Guests.length / 2 - 1, 0, "Ihtasham");    //Adding element at the middle of an array
Guests.push("Ahmed");                                   //Adding element at the end of an array

console.log(`\nNew Guests list with messages is as follows:
1- Hey ${Guests[0]}, let's catch up over a delicious dinner at our place!
2- Mr ${Guests[1]}! let's get together for dinner and reminisce about old times.
3- ${Guests[2]}! we're having a dinner party, and we'd be thrilled if you could make it.
4- ${Guests[3]}! join us for a night of fun, laughter, and great food with our closest friends.
5- Hello ${Guests[4]}! come over for dinner, and let's have a good time together with your best friends
6- Hey ${Guests[5]}! let's have a dinner party and share our favourite stories over some tasty dishes.`);
