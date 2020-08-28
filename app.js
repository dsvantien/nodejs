const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello world app first');
});

var port = process.env.port || 3000;
app.listen(port, (err, res) => {
    if (err) {
        console.log('something wrong');
    } else {
        console.log('server connected at port ' + port);
    }
})