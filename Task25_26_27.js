/*
25- Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
*/

//Task 25
let alien_color = "Green";

//Version that passes the test
if (alien_color == "Green")
{
    console.log("Yes, the color of alien is green!!\nThe player just earned 5 points!!");
}

//Versin that fails the test
if (alien_color == "Red")
{
    console.log("Yes, the color of alien is red!!\nThe person just earned 15 points!!");
}

//Task 26
if (alien_color == "Green")
{
    console.log("\nThe player just earned 5 points for shooting the alien.");
}
else
{
    console.log("\nThe player just earned 10 points for shooting the alien.");
}

//Task 27
alien_color = "Yellow";
if (alien_color == "Green")
{
    console.log("\nThe color of alien is green and the player earned 5 points.");
}
else if (alien_color == "Yellow")
{
    console.log("\nThe color of alien is yellow and the player earned 10 points.");
}
else
{
    console.log("\nThe color of alien is red and the player earned 15 points.");
}


