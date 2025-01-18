const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(error => {
    console.error('An error occurred:', error); // Log the error for debugging
    res.status(500).send('Internal Server Error'); //Send a proper error response
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));

async function someAsyncOperation() {
  // Simulate an asynchronous operation that might fail
  return new Promise((resolve, reject) => {
    const randomNumber = Math.random();
    if (randomNumber < 0.5) {
      resolve();
    } else {
      reject(new Error('Something went wrong!'));
    }
  });
} 