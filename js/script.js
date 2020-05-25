/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
let quotes = [
{
  quote: "To learn to succeed, you must first learn to fail.",
  source: "–Vince Lombardi",
  citation: "Spoken",
  year: 1960
},
{
  quote: "Many of life\’s failures are people who did not realize how close they were to success when they gave up.",
  source: "–Thomas Edison",
},
{
  quote: "It does not matter how slowly you go so long as you do not stop.",
  source: "–Confucius Philosopher",
},
{
  quote: "A winner is just a loser who tried one more time.",
  source: "–George M. Moore Jr.",
  citation: "Spoken",
  year: 2003
},
{
  quote: "Courage is not having the strength to go on; it is going on when you don't have the strength.",
  source:  "–Theodore Roosevelt"
},
{
  quote: "Never, never, never give up.",
  source: "–Winston Churchill",
  citation: "Spoken",
  year: 1941
}
];
//function for random number generator returns variable randomQuote
function getRandomNumber() {
   var randomNumber= Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

//create function for printing random quote based on string of html added to the message variable
function printQuote(){
    var chosenQuote = getRandomNumber(quotes);
    var  message = '<p class="quote">' +  chosenQuote.quote + '</p>';
     printHTML += '<p class="source">' + chosenQuote.source;
      //chosenQuote.citation + chosenQuote.year </p>'
  if (chosenQuote.citation) {
        message += '<span class= "citation"> ' + chosenQuote.citation + '</span>';
  }
  if (chosenQuote.year){
    message += '<span class="year">' + chosenQuote.year + '</span>';
  }

message += '</p>';
document.getElementById('quote-box').innerHTML = message;
}
printQuote();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
