import React, { useEffect, useState } from 'react';
import './App.css';
import { BagItems } from './components/BagItems';
import { Header } from './components/Header';
import { SavedListItems } from './components/SavedListItems';

function App() {
  const [data, setData] = useState([]);
  const [bagItems, setBagItems] = useState([]);
  const [savedItems, setSavedItems] = useState([]);
  const [itemCount, setItemCount] = useState(0);

useEffect(() => {
  const bagItems = data.filter((item: any) => item.inBag)
  const savedItems = data.filter((item: any) => !item.inBag)
  setItemCount(bagItems.length);
  setBagItems(bagItems);
  setSavedItems(savedItems);
}, [data, setItemCount, data])

const deleteItem = (itemId: number) => {
  const updateData = data.filter(({id}) => id !== itemId )
  setData(updateData)
}

 useEffect(() => {
    fetch("/getbag")
      .then((res) => res.json())
      .then((data) => { console.log(data); setData(data)});
  }, []);

  return (
    <div className="App">
      <Header itemsCount={itemCount} />
      <BagItems items={bagItems} deleteItem={deleteItem} />
      <SavedListItems items={savedItems} deleteItem={deleteItem} />
    </div>
  );
}


export default App;
