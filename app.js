const express = require('express');
const path = require('path');
const app = express();
const axios = require('axios');
const port = 3000;

app.post('/signin', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
s

  // Make a POST request to the server
  axios
    .post('http://localhost:8083/test', {
      username: username,
      password: password
    })
    .then(response => {
      // Handle the response from the server
      res.json(response.data);
    })
    .catch(error => {
      // Handle any errors that occur during the request
      res.status(500).json({ error: 'An error occurred' });
    });
})

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`); 
});

