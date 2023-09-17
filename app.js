const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static('public'));

app.post('/sendValue', (req, res) => {
    const receivedValue = req.body.value;
    const responseObject = {
        message: `Received value: ${receivedValue}`,
        additionalInfo: 'This is additional information from the server.'
    };
    res.send(responseObject);
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
