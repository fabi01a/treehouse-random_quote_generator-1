/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
/*** Your feedback is greatly appreciated - I am aiming for all the "exceeds" requirement but I don't mind if I pass with a Meets Expectations grade (your feedback is what I am interested in). */

/*** 
 * These are 10 famous quotes listed in an array of objects. Each object has a `quote` and `source` property, and some objects have an optional `citation` and `year` property.
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
    year: "1913",
    tag: "inspirational"
  },
  {
    quote:  "Believe you can and you're halfway there.",
    source: "Theodore Roosevelt",
    tag: "motivational"
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
 * This is a `getRandomQuote` function that generates a random number at the max of the `quotes` array length,  and returns a random quote object from the `quotes` array based on that number.
***/
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];
}

/*** creating a function to change the background color of the page when a new quote is displayed ***/
function changeBackgroundColor() {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
}

/***
 * The `printQuote` function contains the logic to display a random quote on the webpage. It calls the `getRandomQuote` function to get a random quote object, constructs an HTML string with the quote and its properties, and updates the `quote-box` div with the generated HTML.
***/
function printQuote() {
  /***
   * the `getRandomQuote` function will be called and stored in this variable 'randomQuote,' to be used in the `printQuote` function
  ***/
  const randomQuote = getRandomQuote();

  /*** The 'quote' variable will be used to store the HTML string that will be displayed in the `quote-box` div. The HTML string will include the quote and source, and if available, the citation and year.
  ***/
  let quote = `
    <p class="quotes">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
  `;

  /*** if the `randomQuote` object has a `citation` property, it will be added to the HTML string. ***/
  if  (randomQuote.citation) {
    quote += `<span class="citation">${randomQuote.citation}</span>`;
  }

  /*** if the `randomQuote` object has a `year` property, it will be added to the HTML string. ***/
  if (randomQuote.year) {
    quote += `<span class="year">${randomQuote.year}</span>`;
  }

  if (randomQuote.tag) {
    quote += `<span class="tag">${randomQuote.tag}</span>`;
  }

  /*** the closing `</p>` tag will be added to the HTML string. ***/
  quote += `</p>`;

  /*** Logging the random quote object as instructed ***/
  console.log(randomQuote);

  /*** Logging one or more of the properties from the random quote object as instructed ***/
  console.log(randomQuote.quote);
  console.log(randomQuote.source);

  /*** Logging the complete HTML string as instructed ***/
  console.log(quote);

  /*** the 'quote-box' div will be updated with the HTML string stored in the 'quote' variable. ***/
  document.getElementById('quote-box').innerHTML = quote; 

  /*** calling the changeBackgroundColor function within the printQuote function to change the background color when a new quote is displayed ***/
  changeBackgroundColor();
};


/*** 
 * This is a built-in `setInterval` function that will call the `printQuote` function every 10 seconds (10000 milliseconds) to automatically display a new quote and change the background color.
***/
setInterval(printQuote, 10000);   


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);