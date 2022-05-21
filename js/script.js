let apiQuotes = [];

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementsByClassName("quote-text");
const quote = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const twitterButton = document.getElementById("twitter-button");
const newQuoteButton = document.getElementById("new-quote");
const loader = document.getElementById('loader');

newQuoteButton.addEventListener('click', randomQuote);
twitterButton.addEventListener('click', tweetQuote);

function loading(){

    loader.hidden = false;
    quoteContainer.style.visibility = "hidden";

}

function complete(){
    loader.hidden = true
    quoteContainer.style.visibility = 'visible';
}

function randomQuote() {
    loading();
    
    const Newquote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    if(!Newquote.author){
        Newquote.author = "Unknown" 
    }

    quoteAuthor.textContent = Newquote.author;
    quote.textContent = Newquote.text;

    complete();
}

async function getQuotes(){
    loading();
    
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


function tweetQuote() {
    const twitterURL = `https://twitter.com/intent/tweet?text=${quote.textContent} \n${quoteAuthor.textContent}`;
    window.open(twitterURL, '_blank');
}


loading();
getQuotes();
