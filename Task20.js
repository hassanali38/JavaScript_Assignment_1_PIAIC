/*
20- Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
*/

let languages_array = ["Mandarian", "English", "Russian", "Bengali", "Spanish", "French", "Modern Standard Arabic", "Hindi"];
console.log("The following is the list of most spoken languages in the world:");
for (let i = 0; i < languages_array.length; i++)
{
    console.log(`${i + 1}- ${languages_array[i]}`);
}