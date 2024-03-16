/*
36- T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
*/

function make_shirt(size, message)
{
    console.log(`The size of the shirt is: ${size}\nThe message to be prinited on the shirt is: \"${message}\"`);
}

let size_of_shirt = 'M';
let message_printed = "Apna Time Bhi Aayega";

make_shirt(size_of_shirt, message_printed);

