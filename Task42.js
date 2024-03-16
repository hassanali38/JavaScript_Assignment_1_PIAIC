/*
42- Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
*/

let magicians = ['Dynamo', 'Criss Angel', 'Shin Lim', 'David Copperfield', 'Derren Brown', 'Juan Tamariz'];

function make_great(arr_magicians)
{
    for (let j = 0; j < arr_magicians.length; j++)
    {
        arr_magicians[j] = 'The Great ' + arr_magicians[j];
    }
}

make_great(magicians);

function show_magicians(array_of_magicians)
{
    for (let i = 0; i < array_of_magicians.length; i++)
    {
        console.log(`${i + 1}- ${array_of_magicians[i]}`);
    }
}

show_magicians(magicians);