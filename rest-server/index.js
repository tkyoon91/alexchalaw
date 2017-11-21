const path = require('path');
const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT;

app.use(express.static(path.resolve(__dirname, '../client/public')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/public/index.html'));
})
app.listen(PORT, ()=> {
  console.log('server is listening on PORT:', PORT);
})