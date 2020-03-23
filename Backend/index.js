const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.json({
        texto:'iai planeta'
    })
});

app.listen(3333);