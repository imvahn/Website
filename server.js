const express = require('express');
const device = require('express-device');
const app = express();
const port = 3000;

app.use(device.capture());
app.use(express.static('public'));

app.get('/', (req, res) => {
    const deviceType = req.device.type.toUpperCase();
    console.log(`Request received from a ${deviceType}`);
    res.send(`Hello, you're accessing from a ${deviceType}`);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
