// Javascript exercise 01

// converts the user input to a number
//let num = Number( window.prompt ("Enter a number between 1 and 10") );

// additional way to convert the user input to a number
let num = parseInt( window.prompt ("Enter a number between 1 and 10") );
window.console.log ( typeof(num) );

if (num === 5) {
    window.document.write ("You guessed right - number! <br>");
}   else {
    window.document.write ("You guessed the wrong number =( <br>");
}

if (num === "5") {
    window.document.write ("You guessed right - string! <br>");
}

// condensed if/else statement
(num === 5) ? window.document.write ("You guessed right!<br>") : window.document.write ("You guessed wrong <br>");

let grade = parseInt (window.prompt ("Enter the student\'s grade") );
if (grade >= 90) {
    window.document.write ("Student received an A <br>");
}   else if (grade >= 80) {
    window.document.write ("Student received a B <br>");
}   else if (grade >= 70) {
    window.document.write ("Student received a C <br>");
}   else if (grade >= 60) {
    window.document.write ("Student received a D <br>");
}   else {
    window.document.write ("Student failed the course <br>");
}

let discount = 0;
let total = window.prompt('Enter cart total');
let type = window.prompt('Enter customer type (r/w)');

if (type === 'r') {
    if (total > 500) {
        discount = 0.10;
    }   else if (total > 100) {
            discount = 0.05;
    }
}   else if (type === 'w') {
        if (total > 500) {
            discount = 0.20;
        } else if (total > 100) {
            discount = 0.10;
        }
}   else {
        discount = 0;
}

window.document.write('Customer type: ', type, '<br>');
window.document.write('Discount applied:', discount, '<br>');