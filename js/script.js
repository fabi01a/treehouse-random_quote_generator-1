/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/*** 
 * these are famous quotes listed in an array of objects. Each object has a `quote` and `source` property, and some objects have an optional `citation` and `year` property.
***/
const quotes = [
  {
  quote: "The only way to do great work is to love what you do.",
  source: "Steve Jobs",
  citation: "https://www.brainyquote.com/quotes/steve_jobs_121993",
  year: "2005"
  },
  {
    quote: "You must be the change you wish to see in the world.",
    source: "Mahatma Gandhi",
    year: "1913"
  },
  {
    quote:  "Believe you can and you're halfway there.",
    source: "Theodore Roosevelt"
  },
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    source: "Winston Churchill",
    year: "1941",
    citation: "https://www.brainyquote.com/quotes/winston_churchill_121993"
  },
  {
    quote: "In the middle of every difficulty lies opportunity.",
    source: "Albert Einstein",
    citation: "https://www.brainyquote.com/quotes/albert_einstein_121993"
  },
  {
    quote: "The best way to predict the future is to invent it.",
    source: "Alan Kay",
    year: "1971"
  },
  {
    quote: "Do not wait to strike till the iron is hot; but make it hot by striking.",
    source: "William Butler Yeats"
  },
  {
    quote: "The journey of a thousand miles begins with one step.",
    source: "Lao Tzu"
  },
  {
    quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    source: "Zig Ziglar",
    citation: "https://www.brainyquote.com/quotes/zig_ziglar_121993",
    year: "1980"
  },
  {
    quote: "The only limit to our realization of tomorrow will be our doubts of today.",
    source: "Franklin D. Roosevelt"
  }
];


/***
 * this is a `getRandomQuote` function that generates a random number and returns a random quote object from the `quotes` array.
***/
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/***
 * `printQuote` function
***/
function printQuote() {
    /***
   * the `getRandomQuote` function will be called and stored in this variable 'randomQuote' to be used in the `printQuote` function
  ***/
  const randomQuote = getRandomQuote();

  /*** the 'quote' variable will be used to store the HTML string that will be displayed in the `quote-box` div. The HTML string will include the quote and source, and if available, the citation and year.
  ***/
  let quote = `
    <p class="quotes">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
  `;

  if  (randomQuote.citation) {
    quote += `<span class="citation">${randomQuote.citation}</span>`;
  }
  if (randomQuote.year) {
    quote += `<span class="year">${randomQuote.year}</span>`;
  }
  quote += `</p>`;
  
  /*** the 'quote-box' div will be updated with the HTML string stored in the 'quote' variable. ***/
  document.getElementById('quote-box').innerHTML = quote; 
  console.log(randomQuote);
};




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);