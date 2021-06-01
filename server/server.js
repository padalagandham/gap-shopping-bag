const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/getbag", (req, res) => {
    res.json([]);
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
