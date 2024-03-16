/*
29- Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/

let favorite_fruits = ["Apple", "Mango", "Strawberry"];

if (favorite_fruits.includes("Banana"))          //includes() function checks if a value exists in the array
{
    console.log("\nYou really like Bananas!");
}

if (favorite_fruits.includes("Orange"))
{
    console.log("\nYou really like Oranges!");
}

if (favorite_fruits.includes("Strawberry"))
{
    console.log("\nYou really like Strawberries!");
}

if (favorite_fruits.includes("Peach"))
{
    console.log("\nYou really like Peach!");
}

if (favorite_fruits.includes("Apple"))
{
    console.log("\nYou really like Apples!");
}