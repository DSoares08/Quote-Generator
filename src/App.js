import './App.css';
import Card from './components/Card';
import { useState, useEffect } from "react";

function App() {
  const [quote, setQuote] = useState({
    "quote": "The best way out is always through.",
    "author": "Robert Frost",
    "category": "inspirational"
  });

  function getQuote() {
    let options = {
        method: 'GET',
        headers: { 'x-api-key': 'R71inVFrhnAWDZufSFucrw==Dx3WRmhehN9OlIgc' }
      }
  
      let url = 'https://api.api-ninjas.com/v1/quotes?category=inspirational'
  
  
      fetch(url, options)
        .then((res) => res.json()) // parse response as JSON
        .then((data) => setQuote(data[0]))
        .catch((err) => console.log(err.message));
  }

  return (
    <div className="App">
      {quote && <Card quote={quote} />}
      <button onClick={getQuote}>Get Quote</button>
    </div>
  );
}

export default App;
