const express = require('express');

const app = express();
app.use((req, res) => {
  const random = Math.floor(Math.random() * 1000);
  console.log(`REQ: ${random}`);
  const start = new Date();
  while (new Date() - start < 300) {}
  console.log(`RES: ${random}`);
  res.header('Access-Control-Allow-Origin', '*');
  res.send(200, random);
});
const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log("ExpressJS Listening at http://%s:%s", host, port);
});
