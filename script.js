/* Multiplication */

// Create 2 variables, a & b, and set to ne random integers between 3 and 9
var equation = 0;
var answer = 0;
for (let question = 0;question < 5; question++) {
    let a = Math.floor(Math.random()*7)+3;
    let b = Math.floor(Math.random()*7)+3;
    let product = a* b;
    equation = alert(a + "*" + b + " = ?");
    answer = prompt(equation);
    if (answer == product) alert("Correct!");
    else alert("Incorrect!");
}
// Set a variable called equation to display  a * b = ?
// Say "Correct!" if the answer and product match, "Incorrect!" if not.
/* Multiplication whjile Loop */
// Embed all this code in a While loop and run it 5 times.

/* Multiplication For Loop */
// Convert the while loop to a for loop. 