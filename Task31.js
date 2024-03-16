/*
31- No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
*/

let usernames = ['Mack', 'Eric', 'Chris', 'Admin', 'Michael'];
while (usernames.length > 0)
{
    usernames.pop();        //To empty an array
}

if (usernames.length == 0)  //If an array is empty
{
    console.log("We need to find some users!");
}




