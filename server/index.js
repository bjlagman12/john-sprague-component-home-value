const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express(); 
let port = 3000;

app.use(express.static(path.resolve(__dirname + '../client/dist')));
app.use(bodyParser.json());


// app.get('/', (req, res) => {
//   res.send('connected');
// });


app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

