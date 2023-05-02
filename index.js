const btnEl=document.getElementById("btn");
const quoteEl=document.getElementById("quote");
const authorEl=document.getElementById("author");

const apiURL="https://api.quotable.io/random";

async function getQuote(){
    
    try {
        btnEl.innerText="Loading......";
        btnEl.disabled=true;
        quoteEl.innerText="Updating.....";
        authorEl.innerText="Updating....."; 
        const data=await fetch(apiURL).then((res)=>res.json());
        // const data=response.json();
        const quoteContent=data.content;
        const quoteAuthor=data.author;
        quoteEl.innerText=quoteContent;
        authorEl.innerText=quoteAuthor; 
        btnEl.innerText="Get a quote";
        btnEl.disabled=false;
    } catch (error) {
        quoteEl.innerText="An error happended try again later"
        authorEl.innerText="An error happended"
        btnEl.disabled=false;
    }

    
  
}
getQuote();

btnEl.addEventListener("click",getQuote)