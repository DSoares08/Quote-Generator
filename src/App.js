import './App.css';
import Card from './components/Card';
import { useState } from "react";

function App() {
  const [quote, setQuote] = useState({
    "quote": "The best way out is always through.",
    "author": "Robert Frost",
    "category": "inspirational"
  });

  function getQuote() {
    let options = {
      method: 'GET',
      headers: { 'X-Api-Key': 'R71inVFrhnAWDZufSFucrw==Dx3WRmhehN9OlIgc' }
    }

    let url = 'https://api.api-ninjas.com/v1/quotes'


    fetch(url, options)
      .then((res) => res.json()) // parse response as JSON
      .then((data) => setQuote(data[0]))
      .catch((err) => console.log(err.message));
  }

  return (
    <div className="App h-screen flex justify-center items-center">
      <div>
        {quote && <Card quote={quote} />}
        <button onClick={getQuote} className="bg-green-400 px-5 py-4 mt-5 text-white">Get Quote</button>
      </div>
    </div>
  );
}

export default App;
