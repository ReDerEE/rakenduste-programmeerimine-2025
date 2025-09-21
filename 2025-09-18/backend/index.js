const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Somebody requested something");
});

app.post("/", (req, res) => {
  res.send("Somebody sent something");
});

app.put("/", (req, res) => {
  res.send("Somebody updated something");
});

app.delete("/", (req, res) => {
  res.send("Somebody deleted something");
});

app.get("/manufacturer/:manufacturerId/product/:productId", (req, res) => {
  res.send(
    "Requested manufacturer " +
      req.params.manufacturerId +
      ", product " +
      req.params.productId
  );
});

app.get("/events/:dateStart-:dateEnd", (req, res) => {
  res.send(
    "Requested events from " +
      req.params.dateStart +
      " to " +
      req.params.dateEnd
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
