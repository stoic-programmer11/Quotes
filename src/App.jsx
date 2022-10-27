import { useState } from 'react'
import reactLogo from './assets/react.svg'
import quotes from './quotes.json'
import './App.css'
import QuoteBox from './assets/components/QuoteBox';
import Button from './assets/components/Button';

function App() {


  
  return (
    <div className="App">
    <QuoteBox/>
    </div>
  )
}

export default App
