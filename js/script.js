/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

var quotes = []
quotes = [
  { quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", source: "Martin Fowler" },
  { quote: "First, solve the problem. Then, write the code.", source: "John Johnson" },
  { quote: "Experience is the name everyone gives to their mistakes.", source: "Oscar Wilde" },
  { quote: "Knowledge is power.", source: "Francis Bacon" },
  { quote: "Code is like humor. When you have to explain it, it’s bad.", source: "Cory House", citation: "Good citation", year: 2005 }
 ]


// fuction to return a random quote object from the array

function getRandomQuote() {
  var randomNumber = Math.floor( Math.random() * quotes.length )
  return quotes[randomNumber]
}

// function to construct quote element and replace the existing innerHTML

function printQuote() {
  var randomQuote = getRandomQuote()
  var htmlString = ''
  htmlString = '<p class="quote">' + randomQuote.quote + '</p>'
  htmlString += '<p class="source">' + randomQuote.source
  // checking if citation exist
  if (randomQuote.citation) {
    htmlString += '<span class="citation">' + randomQuote.citation + '</span>'
  }
  // checking if year exist
  if (randomQuote.year) {
    htmlString += '<span class="year">' + randomQuote.year + '</year>'
  }

  htmlString += '</p>'
  // replacing the innerHTML with constructed htmlString
  document.getElementById('quote-box').innerHTML = htmlString
}


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
