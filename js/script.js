/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/*** 
 * these are famous quotes listed in an array of objects. Each object has a `quote` and `source` property, and some objects have an optional `citation` and `year` property.
***/
const quotes = [
  {
  quote1: "The only way to do great work is to love what you do.",
  source1: "Steve Jobs",
  citation1: "https://www.brainyquote.com/quotes/steve_jobs_121993",
  year1: "2005"
  },
  {
    quote2: "You must be the change you wish to see in the world.",
    source2: "Mahatma Gandhi",
    year2: "1913"
  },
  {
    quote3:  "Believe you can and you're halfway there.",
    source3: "Theodore Roosevelt"
  },
  {
    quote4: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    source4: "Winston Churchill",
    year4: "1941",
    citation4: "https://www.brainyquote.com/quotes/winston_churchill_121993"
  },
  {
    quote5: "In the middle of every difficulty lies opportunity.",
    source5: "Albert Einstein",
    citation5: "https://www.brainyquote.com/quotes/albert_einstein_121993"
  },
  {
    quote6: "The best way to predict the future is to invent it.",
    source6: "Alan Kay",
    year6: "1971"
  },
  {
    quote7: "Do not wait to strike till the iron is hot; but make it hot by striking.",
    source7: "William Butler Yeats"
  },
  {
    quote8: "The journey of a thousand miles begins with one step.",
    source8: "Lao Tzu"
  },
  {
    quote9: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    source9: "Zig Ziglar",
    citation9: "https://www.brainyquote.com/quotes/zig_ziglar_121993",
    year9: "1980"
  },
  {
    quote10: "The only limit to our realization of tomorrow will be our doubts of today.",
    source10: "Franklin D. Roosevelt"
  }
];


/***
 * this is a `getRandomQuote` function that generates a random number and returns a random quote object from the `quotes` array.
***/
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}
console.log(getRandomQuote());



/***
 * `printQuote` function
***/
function printQuote() {
};


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);