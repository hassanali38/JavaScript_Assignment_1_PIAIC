/*
18- Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/

//Declaring and initializing an array of places
let places = ["Switzerland", "New York", "Dubai", "Maldives", "Canada"];

//Priniting an array in its original order
console.log("The array of places, which I would like to visit, in its original order is:");
for (let i = 0; i < places.length; i++)
{
    console.log(`${i + 1}- ${places[i]}`);
}

//Printing an array in alphabetical order
let count = 1;         //count variable is used to give numbering to each place's name while priniting from 1 to 5
console.log("\nThe array of places in alphabetical order is: ");
for (let j = 65; j <= 90; j++)         //Since in ASCII code, uppercase alphabets start from unicode of 65(A)-90(Z)
{
    let char = String.fromCharCode(j);
    for (let k = 0; k < places.length; k++)
    {
        if (char == places[k][0])
        {
            console.log(`${count}- ${places[k]}`);
            count++;
        }
    }
}
count = 1;

//Printing the original array
console.log("\nThe original array is not modified: ");
for (let z = 0; z < places.length; z++)
{
    console.log(`${z + 1}- ${places[z]}`);
}

//Printing an array in reverse alphabetical order
console.log("\nThe array of places in reverse alphabetical order:");
for (let i = 90; i >= 65; i--)      //Since in ASCII code, 90 represents 'Z' and 65 represents 'A'
{
    let character = String.fromCharCode(i);
    for (let x = 0; x < places.length; x++)
    {
        if (character == places[x][0])
        {
            console.log(`${count}- ${places[x]}`);
            count++;
        }
    }
}
count = 1;

//Printing the original array
console.log("\nThe original array is not modified:");
for (let w = 0; w < places.length; w++)
{
    console.log(`${w + 1}- ${places[w]}`);
}

//Reversing the order of an array
places.reverse();
console.log("\nThe array is reversed and its order has changed:");
for (let y = 0; y < places.length; y++)
{
    console.log(`${y + 1}- ${places[y]}`);
}

//Again reversing the order of an array to its original order
places.reverse();
console.log("\nThe array is now again reversed to its original order:");
for (let x = 0; x < places.length; x++)
{
    console.log(`${x + 1}- ${places[x]}`);
}

//Sorting an array in alphabetical order
places.sort();

//Printing an array to show that original array is now sorted
console.log("\nThe original array is now sorted in alphabetical order:");
for (let y = 0; y < places.length; y++)
{
    console.log(`${y + 1}- ${places[y]}`);
}

//Sorting an array in reverse alphabetical order
places.reverse();

//Printing an array to show that original array is now sorted in reverse alphabetical order
console.log("\nThe original array is now sorted in reverse alphabetical order:");
for (let z = 0; z < places.length; z++)
{
    console.log(`${z + 1}- ${places[z]}`);
}
