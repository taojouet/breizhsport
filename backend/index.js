const express = require('express');
const app = express();
const port = 3030;

app.get('/', (req, res) => {
  res.send('Hello Antoine le mec sympa!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});