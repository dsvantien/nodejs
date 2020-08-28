const express = require('express');
const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('landing');
});

app.get('/girls', function(req, res) {
    var girls = [{ name: 'girl1', image: 'https://i.pinimg.com/originals/4a/b7/bf/4ab7bf62e5a1fdf4f7759bb3fcf6cf0e.jpg' },
        { name: 'girl2', image: 'http://images6.fanpop.com/image/photos/42600000/Cute-Girl-simpo1-42645775-736-918.jpg' },
        { name: 'girl3', image: 'http://images6.fanpop.com/image/photos/42600000/The-Girls-simpo1-42645768-1470-2205.jpg' },
        { name: 'girl4', image: 'http://images6.fanpop.com/image/photos/42600000/The-Girls-simpo1-42645765-480-640.jpg' }
    ];
    res.render('girls', { girls: girls });
});
var port = process.env.port || 3000;
app.listen(port, (err) => {
    if (err) {
        console.log('something wrong');
    } else {
        console.log('server connected at port ' + port);
    }
})