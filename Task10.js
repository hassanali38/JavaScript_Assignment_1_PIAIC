/*
10- Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
*/

//Task 3
//Name: Hassan Ali
//In this task, we have converted string into different cases such as Uppercase, Lowercase and Titlecase
let name = "pakistan";
console.log("Task 3:");
console.log(name.toUpperCase());                            //To convert string to Uppercase 
console.log(name.toLowerCase());                            //To convert string to Lowercase 
console.log(name.replace(name[0], name[0].toUpperCase()));  //To convert string to Titlecase 

//Task 5
//In this task, we have stored named of a person in spearate variable and then concate it with his quote and store in message variable.
let famous_person = "Albert Einstein";
let message = famous_person + ` once said, "Life is like riding a bicycle. To keep your balance, you must keep moving."`;
console.log(`\nTask 5:\n${message}`);
