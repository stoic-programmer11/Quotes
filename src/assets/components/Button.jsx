import React from 'react';
import { useState } from 'react';


const Button = ({ colors,changeQuote,randomC }) => {


    document.body.style = `background: ${colors[randomC]}`


    // Change 
    const changeColor = () => {
        const randomC = Math.floor(Math.random() * colors.length)
        document.body.style = `background: ${colors[randomC]}`
        changeQuote()
    }


    return (
        <div className='button' >
            <button className='changeQ' onClick={changeColor} style={{background: colors[randomC]}}>
                <i class="fa-solid fa-angle-right"></i>
            </button>
        </div>
    );
};

export default Button;