const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('JAKE의 comma-api project입니다!');
});

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`);
});

app.get('/health', (req, res) => {
  res.send('Healthy');
});
