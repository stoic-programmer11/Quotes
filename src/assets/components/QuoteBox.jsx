import React from 'react';
import Button from './Button';
import quotes from '../../quotes'
import { useState } from 'react';


const QuoteBox = () => {

    //Colors
    const colors = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#5F97FF", "#00a719"];
    const randomC = Math.floor(Math.random() * colors.length)
    document.body.style = `background: ${colors[randomC]}`


    //Quote

    const randomQ = Math.floor(Math.random() * quotes.length)
    const [quote, setQuote] = useState(quotes[randomQ].quote)

    //Autor
    const [autor, setAutor] = useState(quotes[randomQ].author)


    //Function to change the quote and author
    const changeQuote = () => {
        const randomQ = Math.floor(Math.random() * quotes.length)
        setQuote(quotes[randomQ].quote)
        setAutor(quotes[randomQ].author)
    }




    return (
        <div className='quoteBox'>
            <h1 style={{ color: colors[randomC] }}><i class="fa-solid fa-quote-left iconQ" style={{ color: colors[randomC] }}></i> {quote}</h1>
            <h2 style={{ color: colors[randomC] }} className="autor-text">{autor}</h2>
            <Button colors={colors} randomC={randomC}
                changeQuote={changeQuote}
            />
        </div>
    );
};

export default QuoteBox;