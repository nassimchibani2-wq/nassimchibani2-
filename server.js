const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>NC-2030 CORE</title>
        <style>
          body { background-color: #0d0d0d; color: white; font-family: 'Segoe UI', sans-serif; text-align: center; margin: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; }
          .status-card { border: 2px solid #00ffcc; padding: 15px; border-radius: 12px; background: rgba(0, 255, 204, 0.05); margin-bottom: 40px; width: 280px; }
          .status-card h2 { color: #00ffcc; font-size: 18px; margin: 5px 0; }
          .core-container { position: relative; width: 250px; height: 250px; display: flex; align-items: center; justify-content: center; }
          .core-circle { border: 8px double #00ffcc; border-radius: 50%; width: 200px; height: 200px; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 20px #00ffcc; animation: pulse 2s infinite; }
          .core-text { font-weight: bold; color: #00ffcc; font-size: 20px; letter-spacing: 2px; }
          .footer-text { margin-top: 20px; color: #00ffcc; font-size: 24px; font-weight: bold; text-transform: uppercase; }
          @keyframes pulse { 0% { box-shadow: 0 0 10px #00ffcc; } 50% { box-shadow: 0 0 30px #00ffcc; } 100% { box-shadow: 0 0 10px #00ffcc; } }
        </style>
      </head>
      <body>
        <div class="status-card">
          <span>🚀</span>
          <h2>NC-2030 Global Server</h2>
          <p style="font-size: 12px;">Welcome, <b>Nassim Developer</b>!</p>
          <hr style="border: 0.5px solid #333;">
          <p style="font-size: 12px; color: #00ffcc;">Status: Online & Secured</p>
        </div>
        
        <div class="core-container">
          <div class="core-circle">
            <div class="core-text">NC-2030<br>CORE</div>
          </div>
        </div>

        <div class="footer-text">NC-2030 CORE</div>
      </body>
    </html>
  `);
});

app.listen(port, () => { console.log('Server Active'); });
