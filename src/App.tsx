import { useEffect, useState } from 'react';
import './App.css';
import { BagItems } from './components/BagItems';
import { Header } from './components/Header';
import { SavedListItems } from './components/SavedListItems';
import { ADD, ItemType } from './types';

function App() {
  const [data, setData] = useState<ItemType[]>([]);
  const [bagItems, setBagItems] = useState<ItemType[]>([]);
  const [savedItems, setSavedItems] = useState<ItemType[]>([]);
  const [itemCount, setItemCount] = useState(0);

useEffect(() => {
  const bagItems = data.filter((item: any) => item.inBag)
  const savedItems = data.filter((item: any) => !item.inBag)
  const itemCountArr: number[] = data.map((item: ItemType) => item.inBag ? item.count: 0)
  setItemCount(itemCountArr.reduce((a, b) => a + b, 0));
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
  setData(updateData)
}

const updateItemCount = (action: string, itemId: number) => {
    const updateData: ItemType[] = data.map((item:ItemType) => {
      if(item.id === itemId) {
        item.count = action  === ADD ? item.count + 1 : item.count <= 1 ? 1 : item.count -1 
      }
      return item;
   });
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
      <BagItems items={bagItems} deleteItem={deleteItem} addToList={moveItem} updateItemCount={updateItemCount} />
      <SavedListItems items={savedItems} deleteItem={deleteItem} addToBag={moveItem} />
    </div>
  );
}


export default App;
