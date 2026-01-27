const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>🚀 Welcome Nassim Developer!</h1><p>Your server is now running on the Cloud 24/7.</p>');
});

app.listen(port, () => {
  console.log('Server is running on port ' + port);
});
