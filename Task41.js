/*
41- Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
*/

let magicians = ['Dynamo', 'Criss Angel', 'Shin Lim', 'David Copperfield', 'Derren Brown', 'Juan Tamariz'];
function show_magicians(array_of_magicians)
{
    for (let i = 0; i < array_of_magicians.length; i++)
    {
        console.log(`${i + 1}- ${array_of_magicians[i]}`);
    }
}

show_magicians(magicians);