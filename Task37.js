/*
37- Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/

//Function Definition
function make_shirt(size, message)
{
    if (size == 'S' || size == 'XL' || size == 'XXL')
    {
        console.log(`The size of the shirt is: ${size}\nThe message to be prinited on the shirt is: \"${message}\"`);
    }
    else if (size == 'M' || size == 'L')
    {
        console.log(`The size of the shirt is: ${size}\nThe message to be prinited on the shirt is: \"I love TyperScript\"`);
    }
    else
    {
        console.log("Invalid Input!!");
    }
}

let size = 'L';
let message = 'I love Pakistan!';

//Function Calling
make_shirt(size, message);