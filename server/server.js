const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

const items = [{
  itemName: "test item 1",
  id: 1,
  count: 1,
  inBag: true
},
{
  itemName: "test item 2",
  id: 2,
  count: 2,
  inBag: true
},
{
  itemName: "test item 3",
  id: 3,
  count: 1,
  inBag: true
},
{
  itemName: "test item 4",
  id: 4,
  count: 1,
  inBag: false
}]

app.get("/getbag", (req, res) => {
    res.json(items);
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
