/*
24- More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/

//Test for equality of two strings
let university1 = "National University of Science and Technology";
let university2 = "Air University";
let university3 = "Air University";

console.log("\nTests for euality of two strings:");
console.log(`The following are university named strings: \n1- ${university1}
2- ${university2}
3- ${university3}`);
if (university2 == university3)
{
    console.log("\nThe two strings of university2 and university 3 are equal (true).");
}
else
{
    console.log("The two strings of university2 and university 3 are unequal (false).");
}

if (university1 == university2)
{
    console.log("\nThe two strings of university 1 and university2 are equal (true).");
}
else
{
    console.log("The two strings of university 1 and university2 are unequal (false).");
}

//Tests using lower case function
let person1 = "hassan ali";
let person2 = "HASSAN Ali";

console.log("\nTests using lower case function:");
console.log(`The strings of two persons names are:
1- ${person1}
2- ${person2}`);
if (person1.toLowerCase == person2.toLowerCase)
{
    console.log("\nThe strings of names of two persons are equal in lowercase. (true)");
}
else
{
    console.log("\nThe strings of names of two persons are unequal in lowercase. (falsa)");
}

//Numerical tests invloving equality, inequality greater than, less than etc
console.log("\nNumerical tests invloving equality, inequality, greater than etc:");
console.log(`Is 38 equals to 38? ${38 == 38}`);
console.log(`Is 452 equals to 328? ${452 == 328}`);
console.log(`Is 15,324 greater than 12,675? ${15324 > 12675}`);
console.log(`Is 675 greater than 723? ${675 > 723}`);
console.log(`Is 12 less than 32? ${12 < 32}`);
console.log(`Is 65 less than 56? ${65 < 56}`);
console.log(`Is 6678 greater than or equals to 5562? ${6678 >= 5562}`);
console.log(`Is 345 greater than or equals to 452? ${345 >= 452}`);
console.log(`Is 32 less than or equals to 32? ${32 <= 32}`);
console.log(`Is 998 less than or equals to 546? ${998 <= 546}`);

//Tests using `and` and `or` operators
let num1 = 54, num2 = 67, num3 = 667, num4 = 998;
console.log("\nTests using \`and\` and \`or\` operators:");
console.log(`The values of variables are:
1- num1 = ${num1}
2- num2 = ${num2}
3- num3 = ${num3}
4- num4 = ${num4}`);
//Using `and` operator
console.log(`Is the following compound condition true? (num1 <= num2) && (num3 <= 1000) && (num4 >= 900)
${(num1 <= num2) && (num3 <= 1000) && (num4 >= 900)} `);
console.log(`Is the following compound condition true? (num1 <= num2) && (num3 == num4)
${(num1 == num2) && (num3 == num4)} `);

//Using `or` operator
console.log(`Is the following compound condition true? (num1 > num2) || (num3 <= num4)
${(num1 > num2) || (num3 <= num4)}`);
console.log(`Is the following compound condition true? (num1 == num2) || (num3 > num4)
${(num1 == num2) || (num3 > num4)}`);

//Test whether an item is in an array
let countries = ["Pakistan", "India", "Indonesia", "China", "Thailand", "Russia", "Uzbekistan", "Japan", "Bangladesh"];
let country_to_find1 = "Bangladesh";
let country_to_find2 = "England";
let check1 = false, check2 = false;

console.log("\nTest to find whether an item is present in an array:");
console.log(`The list of countries is: ${countries}`);
for (let i = 0; i < countries.length; i++)
{
    if (country_to_find1 == countries[i])
    {
        check1 = true;
    }
    if (country_to_find2 == countries[i])
    {
        check2 = true;
    }
}

if (check1 == true)
{
    console.log(`${country_to_find1} is present in the list of countries.`);
}
else
{
    console.log(`${country_to_find1} is not present in the list of countries.`)
}

if (check2 == true)
{
    console.log(`${country_to_find2} is present in the list of countries.`);
}
else
{
    console.log(`${country_to_find2} is not present in the list of countries.`)
}


