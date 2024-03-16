/*
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
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

//Adding three more guests in the list
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

//Cancelling the invitations of four guests
console.log("\nUnfortunately!! There is a bad news for all of you!! Our bigger dinner table won't arraive in time so we can only invite two persons for the dinner.");

for (let m = 0; m < 4; m++)
{
    console.log(`\nMr ${Guests[Guests.length - 1]}! I am very sorry to inform you that unfortunately I have to cancel your invitation.`)
    Guests.pop();
}

//Printing the remaining guests in the list who are still invited
console.log("\nFollowing two guests are still invited to a dinner party:");
for (let i = 0; i < Guests.length; i++)
{
    console.log(Guests[i]);
}

Guests.pop();
Guests.pop();

console.log("\nAt the end of the program, the list of guests is now empty:");
console.log(Guests);
