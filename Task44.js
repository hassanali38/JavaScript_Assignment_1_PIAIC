/*
44- Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
*/

let items_on_sandwich_1 = ['Lettuce', 'Onions', 'Peppers', 'Olives'];
let items_on_sandwich_2 = ['Tomatoes', 'Pickles', 'Mushrooms'];
let items_on_sandwich_3 = ['Spinach', 'Avocado', 'Cucumbers', 'Carrots', 'Spreads'];

function make_sandwich (name_of_items, number_of_items)
{
    console.log(`\nThe person ordered a sandwich with ${number_of_items} items on it:`);
    for (let i = 0; i < number_of_items; i++)
    {
        console.log(`${i + 1}- ${name_of_items[i]}`);
    }
}

make_sandwich(items_on_sandwich_1, items_on_sandwich_1.length);
make_sandwich(items_on_sandwich_2, items_on_sandwich_2.length);
make_sandwich(items_on_sandwich_3, items_on_sandwich_3.length);