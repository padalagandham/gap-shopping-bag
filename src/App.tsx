import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from './components/Header';

function App() {
  const [data, setData] = useState(null);
  const [itemCount, setItemCount] = useState("0");

 useEffect(() => {
    fetch("/getbag")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <Header itemsCount={itemCount} />
      <p>{!data ? "Loading..." : data}</p>
    </div>
  );
}


export default App;
