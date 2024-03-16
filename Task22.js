/*
22- Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
*/

let languages_array = ["Mandarian", "English", "Russian", "Bengali", "Spanish", "French", "Modern Standard Arabic", "Hindi"];
console.log(`The length of languages array is ${languages_array.length}.`);
console.log("\nBut when I traverse the array upto 10 elements it will give undefined values (index error):");
for (let i = 0; i < 10; i++)
{
    console.log(`${i + 1}- ${languages_array[i]}`);
}

console.log("\nThe corrected form is:");
for (let i = 0; i < languages_array.length; i++)
{
    console.log(`${i + 1}- ${languages_array[i]}`);
}

