// let num = parseInt(window.prompt("Enter a number between 1 and 10"));
// if (num === 5) {
//     window.document.write('You guessed right!');
// } else {
//     window.document.write('You guess the wrong number!');
// }

// (num === 5) ? window.document.write('You guessed right!') : window.document.write('You guessed wrong!');

// let grade = parseInt(window.prompt('Enter the student\'s grade'));
// if (grade >= 90) {
//     window.document.write('Student received an A');
// } else if (grade >= 80) {
//     window.document.write('Student received an B');
// } else if (grade >= 70) {
//     window.document.write('Student received an C');
// } else if (grade >= 60) {
//     window.document.write('Student received an D');
// } else {
//     window.document.write('Student failed the course');
// }

// let discount = 0;
// let total = window.prompt('Enter cart total');
// let type = window.prompt('Enter customer type (r/w)');

// if (type === 'r') {
//     if (total > 500) {
//         discount = .10;
//     } else if (total > 100) {
//         discount = .05;
//     }
// } else if (type === 'w') {
//     if (total > 500) {
//         discount = .20;
//     } else if (total > 100) {
//         discount = .10;
//     }
// } else {
//     discount = 0;
// }

// window.document.write('Customer type: ', type, '<br>');
// window.document.write('Discount applied: ', discount);

let grade = window.prompt('Enter the student\'s grade');
switch (grade) {
    case 'A':
        window.document.write('You got an A!');
        break;
    case 'B':
        window.document.write('You got an B!');
        break;
    default:
        window.document.write('Your credits won\'t articulate!');
}