/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * * each quote is an object with at least two string properties: 'quote' with the text of a quotation, and 'source' with the author
 * * an optional property of 'citation' may have a book, movie, or other work being cited
 * * an optional property of 'year' includes a year string
***/

let quotes = [
  {
    quote: "Victory awaits him who has everything in order, luck some people call it.",
    source: "Roald Amundsen",
    citation: "Sydpolen (The South Pole)",
    year: "1912"
  },
  {
    quote: "You can observe a lot by just watching.",
    source: "Yogi Berra",
    year: "2008"
  },
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    source: "Winston Churchill (misatributed)",
    citation: "a Budweiser beer ad campaign"
  },
  {
    quote: "I am the one thing in life I can control.",
    source: "Lin-Manuel Miranda's Aaron Burr",
    citation: "Hamilton: An American Musical",
    year: "2015"
  },
  {
    quote: "In theory there is no difference between theory and practice; in practice there is.",
    source: "Walter J. Savitch",
    citation: "Pascal: An Introduction to the Art and Science of Programming",
    year: "1984"
  }
];

/***
 * `getRandomQuote` function
 * * creates a variable 'randomNum' where a random number from Math.random() is generated and multiplied by the length of the quotes array
 * * the result is rounded down with Math.floor() so that it can only be a nunmber between 0 and ( quotes.length - 1 )
 * * the function returns an object from the quotes array with index 'randomNum' (i.e. a random quote from the quotes array)
***/

const getRandomQuote = () => {
  let randomNum = Math.floor( Math.random() * quotes.length );
  return quotes[randomNum];
}

/***
 * `printQuote` function
 * * calls getRandomQuote to get a randomQuote 
 * * creates an HTML string with randomQuote properties, using conditional logic for the two optional properties of 'citation' and 'year'
 * * returns the HTML rendering the randomQuote with the corresponding class attributes and tags for each property of the quote object, and injects it in the page
***/

const printQuote = () => {
  let randomQuote = getRandomQuote();
  let html = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
  `;
  if (randomQuote.citation) {
    html += `
      <span class="citation">${randomQuote.citation}</span>
    `;
  }
  if (randomQuote.year) {
    html += `
      <span class="year">${randomQuote.year}</span>
    `;
  }
  html += `</p>`;
  return document.getElementById('quote-box').innerHTML = html;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);