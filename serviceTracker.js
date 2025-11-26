let input = require ('prompt-sync')();

let feedbackComments =[];
let satisfactionRatings = [];

for (let i = 0; i < 5; i = i + 1){
    feedbackComments.push(input("Enter feedback comment:"));
    satisfactionRatings.push(parseFloat(input ("Enter rating (1-5): ")));
}

            console.table(feedbackComments);
            console.table(satisfactionRatings);