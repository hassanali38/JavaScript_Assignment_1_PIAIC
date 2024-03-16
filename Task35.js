/*
35- Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
*/

let animals = ['Lion', 'Leopard', 'Tiger'];
console.log("\nThe following are the three animals having common characteristics:");
for (let i = 0; i < animals.length; i++)
{
    console.log(`${i + 1}- ${animals[i]}`);
}

console.log("\nThe following are the three animals having common characteristics:");
for (let j = 0; j < animals.length; j++)
{
    console.log(`${j + 1}- A ${animals[j].toLowerCase()} belongs to Panthera family.`);
}

console.log("\nThese all animals share common characteristics such as large predatory cats with similar body structures and hunting behaviors.");