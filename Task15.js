/*
15- Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.
*/

let Guests = ["Haseeb Sajjad", "Aitazaz Ahsan", "Usman Khalid"];
console.log(`Guests list with messages for dinner party is as follows:
Hey ${Guests[0]}, let's catch up over a delicious dinner at our place!
Mr ${Guests[1]}! let's get together for dinner and reminisce about old times.
${Guests[2]}! we're having a dinner party, and we'd be thrilled if you could make it.`);

console.log(`\nGuest who can't make it:
${Guests[2]} will not join us for dinner party because he has some important commitments.`);
Guests.splice(2, 1, "Taha Tanveer");

console.log(`\nUpdated Guests list with messages is as follows:
Hey ${Guests[0]}, let's catch up over a delicious dinner at our place!
Mr ${Guests[1]}! let's get together for dinner and reminisce about old times.
${Guests[2]}! we're having a dinner party, and we'd be thrilled if you could make it.`);