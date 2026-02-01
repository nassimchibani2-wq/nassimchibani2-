const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

// هذا هو المسار الذي سيطلبه تطبيق المانجا
app.get('/proxy', async (req, res) => {
    const imageUrl = req.query.url;
    
    if (!imageUrl) {
        return res.status(400).send('رابط الصورة مطلوب');
    }

    try {
        const response = await axios.get(imageUrl, {
            responseType: 'arraybuffer',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                'Referer': 'https://manganelo.com/' // خدعة لتجاوز حظر المواقع
            }
        });

        // إخبار المتصفح أن هذه صورة وليست نصاً
        res.set('Content-Type', response.headers['content-type']);
        res.send(response.data);
        
    } catch (error) {
        console.error('حدث خطأ في جلب الصورة:', error.message);
        res.status(500).send('فشل السيرفر في جلب الصورة');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`السيرفر يعمل الآن على المنفذ ${PORT}`);
});
