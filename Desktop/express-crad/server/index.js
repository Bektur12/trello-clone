const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/product", (req, res) => {
    
});

app.listen(5000, () => {
  console.log("hello");
});