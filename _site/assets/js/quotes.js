window.addEventListener('load', () => {
    fetch(`https://programming-quotes-api.herokuapp.com/quotes/random`).then((data)=>{
        data.json().then(jsonValue=>{
            const randomQuote = document.getElementById("random-quote");
            const citeElement = randomQuote.querySelector("cite[data-quote]");
            const authorElement = randomQuote.querySelector("span[data-author]");
            citeElement.textContent=jsonValue.en;
            authorElement.textContent=jsonValue.author;
        });
    });
});

