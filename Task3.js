/*
3- Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, 
and titlecase.
*/

let name = "pakistan";
console.log(name.toUpperCase());                            //To convert string to Uppercase 
console.log(name.toLowerCase());                            //To convert string to Lowercase 
console.log(name.replace(name[0], name[0].toUpperCase()));  //To convert string to Titlecase 
