/*
43- Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
*/

let magicians = ['Dynamo', 'Criss Angel', 'Shin Lim', 'David Copperfield', 'Derren Brown', 'Juan Tamariz'];
let copy_magicians = ['Dynamo', 'Criss Angel', 'Shin Lim', 'David Copperfield', 'Derren Brown', 'Juan Tamariz'];

function make_great(arr_magicians)
{
    for (let j = 0; j < arr_magicians.length; j++)
    {
        arr_magicians[j] = 'The Great ' + arr_magicians[j];
    }
}

make_great(copy_magicians);

function show_magicians(array_of_magicians)
{
    for (let i = 0; i < array_of_magicians.length; i++)
    {
        console.log(`${i + 1}- ${array_of_magicians[i]}`);
    }
}

show_magicians(magicians);
show_magicians(copy_magicians);