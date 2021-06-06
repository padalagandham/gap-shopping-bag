import { useEffect, useState } from 'react';
import './App.css';
import { BagItems } from './components/BagItems';
import { Header } from './components/Header';
import { SavedListItems } from './components/SavedListItems';
import { ItemType } from './types';

function App() {
  const [data, setData] = useState<ItemType[]>([]);
  const [bagItems, setBagItems] = useState<ItemType[]>([]);
  const [savedItems, setSavedItems] = useState<ItemType[]>([]);
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

const moveItem = (itemId: number) => {
  const updateData: ItemType[] = data.map((item:ItemType) => {
     if(item.id === itemId) {
       item.inBag = !item.inBag
     }
     return item;
  });
  setData(updateData as ItemType[])
}

 useEffect(() => {
    fetch("/getbag")
      .then((res) => res.json())
      .then((data) => { console.log(data); setData(data)});
  }, []);

  return (
    <div className="App">
      <Header itemsCount={itemCount} />
      <BagItems items={bagItems} deleteItem={deleteItem} addToList={moveItem} />
      <SavedListItems items={savedItems} deleteItem={deleteItem} addToBag={moveItem} />
    </div>
  );
}


export default App;
