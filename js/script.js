let apiQuotes = [];

const quoteContainer = document.getElementsByClassName("quote-container");
const quoteText = document.getElementsByClassName("quote-text");
const quote = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const twitterButton = document.getElementById("twitter-button");
const newQuoteButton = document.getElementById("new-quote");


function randomQuote() {
    const Newquote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    if(!Newquote.author){
        Newquote.author = "Unknown" 
    }

    quoteAuthor.textContent = "~ " + Newquote.author;
    quote.textContent = Newquote.text;

}

async function getQuotes(){
    const URL = 'https://type.fit/api/quotes';

    try {
        const response = await fetch(URL);
        apiQuotes = await response.json();
        
        randomQuote();  
        console.log(apiQuotes);
    } catch (error) {
        alert(error);
    }
}

getQuotes();

