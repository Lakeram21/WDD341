const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes')

app.get('/', routes)

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
});