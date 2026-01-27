const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="ar">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>NC-2030 CORE SYSTEM</title>
        <style>
            body { background-color: #0d0d0d; color: white; font-family: 'Courier New', monospace; margin: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; overflow: hidden; }
            /* بطاقة الحالة العلوية */
            .status-card { border: 1px solid #00ffcc; padding: 15px; border-radius: 10px; background: rgba(0, 255, 204, 0.05); width: 260px; text-align: center; box-shadow: 0 0 15px rgba(0, 255, 204, 0.2); margin-bottom: 30px; }
            .status-card h2 { color: #00ffcc; font-size: 16px; margin: 5px 0; letter-spacing: 1px; }
            /* دائرة النظام Core */
            .core-circle { width: 220px; height: 220px; border: 4px double #00ffcc; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 0 25px #00ffcc; animation: pulse 2s infinite; position: relative; }
            .time-display { font-size: 24px; color: #00ffcc; font-weight: bold; text-shadow: 0 0 10px #00ffcc; }
            .date-display { font-size: 12px; color: #00ffcc; opacity: 0.8; margin-top: 5px; }
            /* النص السفلي */
            .footer-title { margin-top: 30px; color: #00ffcc; font-size: 28px; font-weight: bold; letter-spacing: 4px; text-shadow: 0 0 10px #00ffcc; }
            @keyframes pulse { 0% { transform: scale(1); box-shadow: 0 0 20px #00ffcc; } 50% { transform: scale(1.02); box-shadow: 0 0 40px #00ffcc; } 100% { transform: scale(1); box-shadow: 0 0 20px #00ffcc; } }
        </style>
    </head>
    <body>
        <div class="status-card">
            <div style="font-size: 25px;">🚀</div>
            <h2>NC-2030 Global Server</h2>
            <p style="font-size: 11px; margin: 5px 0;">Welcome, <b>Nassim Developer</b></p>
            <div style="height: 1px; background: #333; margin: 10px 0;"></div>
            <p style="font-size: 11px; color: #00ffcc;">Status: Online & Secured</p>
        </div>

        <div class="core-circle">
            <div id="clock" class="time-display">00:00:00</div>
            <div id="date" class="date-display">2026-01-28</div>
            <div style="font-size: 10px; margin-top: 10px;">NC-2030</div>
        </div>

        <div class="footer-title">NC-2030 CORE</div>

        <script>
            function updateClock() {
                const now = new Date();
                const h = String(now.getHours()).padStart(2, '0');
                const m = String(now.getMinutes()).padStart(2, '0');
                const s = String(now.getSeconds()).padStart(2, '0');
                document.getElementById('clock').innerText = h + ":" + m + ":" + s;
                
                const year = now.getFullYear();
                const month = String(now.getMonth() + 1).padStart(2, '0');
                const day = String(now.getDate()).padStart(2, '0');
                document.getElementById('date').innerText = year + "-" + month + "-" + day;
            }
            setInterval(updateClock, 1000);
            updateClock();
        </script>
    </body>
    </html>
  `);
});

app.listen(port, () => { console.log('Server Active on Port ' + port); });
