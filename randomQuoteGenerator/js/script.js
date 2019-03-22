
//The var quotes hold and array of objects.

var quotes = [
  {
    quote:'Bitterness is a paralytic. Love is a much more vicious motivator.',
    source: 'Sherlock Holmes',
    citation: '“The Great Game”'
  },
  {
    quote:'If debugging is the process for removing software bugs, then programming must be the process of putting them in',
    source: 'Edsger Dijkstra'
  },
  {
    quote: 'I don\'t care if it works on your machine! We are not shipping your machine!',
    source: 'Vidiu Platon'    
  },
  {
    quote: 'Measuring programming process by lines of code is like measuring aircraft building process by weight.',
    source: 'Bill Gates'
  },
  {
    quote: 'You are never too old to reinvent yourself.',
    source: 'Steve Harvey',
    year: 2019
  }
];

/* The function takes in a array and holds a random number in
 the randomNumber varible then the varible randomQuote uses that number
 to selet an object in the quotes array*/

function getRandomQuote( arr ){
  var randomNumber = Math.floor(Math.random() * quotes.length );
  var findQuote = arr[randomNumber];
  return findQuote;
}

/*creates a function that stores a function in a varible named randomQuote then the varible is used to get values
out of the object to print to the page the object is then tested in two if statments to see if certain properties exist 
if these properies do exist the if statements are evaluated as true and the the code inside is then concatnated to 
the varibles quote and source the quote varible stores the data that need to be printed to the page and is set equal to
the display string*/

function printQuote(){
  var randomQuote = getRandomQuote(quotes);
  var htmlString = ''
  var source = ''
  var displayString = document.getElementById('quote-box');

  htmlString += '<p class ="quote">'+ randomQuote.quote + '</p>';
  source += '<p class ="source">' + randomQuote.source;
  if(randomQuote.hasOwnProperty('citation')){
    source += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  if(randomQuote.hasOwnProperty('year')){
    source += '<span class = "year">'+ randomQuote.year + '</span>';
  }
  htmlString += source + '</p>'
  displayString.innerHTML = htmlString;
}



// I would have done this differently but you guys said dont touch.

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

