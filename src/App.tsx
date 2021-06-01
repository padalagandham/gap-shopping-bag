import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);

 useEffect(() => {
    fetch("/getbag")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  
  return (
    <div className="App">
      <header className="app-header">
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}


export default App;
