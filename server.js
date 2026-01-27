const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>NC-2030 Official Server</title>
        <style>
          body { background-color: #1a1a1a; color: white; font-family: Arial; text-align: center; padding-top: 50px; }
          .container { border: 2px solid #00ffcc; display: inline-block; padding: 20px; border-radius: 15px; background: #252525; }
          h1 { color: #00ffcc; }
          p { font-size: 20px; }
          .logo { font-size: 50px; margin: 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="logo">🚀</div>
          <h1>NC-2030 Global Server</h1>
          <p>Welcome, <b>Nassim Developer</b>!</p>
          <hr style="border-color: #444;">
          <p>Status: <span style="color: #00ffcc;">Online & Secured</span></p>
          <p style="font-size: 14px; color: #888;">Connected to Cloud 24/7</p>
        </div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log('Server is running');
});
