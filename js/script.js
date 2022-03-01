/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
//array of objects holding quotes
let quotes = [
  { 
    quote: "We don’t inherit the earth from our ancestors, we borrow it from our children.",
    source: "Native American proverb"
  },
  {
    quote:"Look deep into nature, and then you will understand everything better.",
    source:  "Albert Einstein"
  },
  {
    quote:"Nature does not hurry, yet everything is accomplished.",
    source: "Lao Tzu"
  },
  {
    quote: "Leave the road, take the trails.",
    source: "Pythagoras"
  },
  {
    quote: "Study nature, love nature, stay close to nature. It will never fail you.",
    source: "Frank Lloyd Wright"
  },
  {
    quote: "Land really is the best art. ",
    source: "Andy Warhol"
  },
  {
    quote:"Many eyes go through the meadow, but few see the flowers in it.",
    source:"Ralph Waldo Emerson"
  },
  {
    quote:"One touch of nature makes the whole world kin.",
    source:"William Shakespeare",
    citation:"Troilus and Cressida",
    year: 1904
  },
  ];

  console.log(quotes);

/***
 * `getRandomQuote` function
***/
//function to generate random quote 

function getRandomQuote() {
  let randomQuotes = Math.floor( Math.random() * quotes.length);
  currentQuote = quotes[randomQuotes][1];
  return quotes[randomQuotes];
  console.log(getRandomQuote);
};



console.log(getRandomQuote);



/***
 * `printQuote` function
***/

//colors variable
let colors = [
      '#F0F8FF',
      '#F0F8FF',
      '#3A858F',
      '#8F3A57',
      '#3F3438',
      '#3AA330',
      '#DCCE1C',
      '#DC1C24',
];
//function to call random color

function getRandomColor() {
  let randomNum = Math.floor(Math.random() * colors.length);
  return colors[randomNum];
}

//function to print random quote to page

function printQuote() {
  let html = '';
  let printRandomQuote = getRandomQuote();
  let randomColor = getRandomColor(colors);
  for(let i = 0; i <quotes.length; i++){

  };

/* places random quote into a string.  Adds citation and year if applicable and adds to HTML
Assigns background color*/

  html += '<p class="quote">' + printRandomQuote.quote + '</p>';   

  html += '<p class="source">' + printRandomQuote.source;
   
   if ("citation" in printRandomQuote) {
    html += '<span class="citation">' + printRandomQuote.citation + '</span>';
  }

  if ("year" in printRandomQuote) {
    html += '<span class="year">' + printRandomQuote.year + '</span>' + '</p>'; 
  }
  document.querySelector('body').style.backgroundColor = randomColor;
  document.getElementById("quote-box").innerHTML = html;
  return html;
}

printQuote();
console.log(printQuote());

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);