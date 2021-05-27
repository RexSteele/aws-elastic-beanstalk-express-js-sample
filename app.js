const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello my honey, hello my darling, hello my ragtime gal!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
