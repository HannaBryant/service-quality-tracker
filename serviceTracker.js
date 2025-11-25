let input = require ('prompt-sync')();

let feedbackComments =[];
let satisfactionRatings = [];

let i = 0;

while (i < 5) {
    feedbackComments.push(input("Enter feedback comment:"));
    satisfactionRatings.push(Number(input("Enter rating (1-5):")));

    i = i + 1
}

console.table(feedbackComments);
console.table(satisfactionRatings);