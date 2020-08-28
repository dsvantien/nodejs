const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

var girls = [{ name: 'girl1', image: 'https://images.kienthuc.net.vn/zoomh/800/uploaded/ctvcongdongtre/2019_10_23/3/nu-sinh-bac-ninh-dep-chang-kem-hot-girl-chiem-song-mxh.jpeg' },
    { name: 'girl2', image: 'https://images.kienthuc.net.vn/zoomh/800/uploaded/ctvcongdongtre/2019_10_23/3/nu-sinh-bac-ninh-dep-chang-kem-hot-girl-chiem-song-mxh.jpeg' },
    { name: 'girl3', image: 'https://images.kienthuc.net.vn/zoomh/800/uploaded/ctvcongdongtre/2019_10_23/3/nu-sinh-bac-ninh-dep-chang-kem-hot-girl-chiem-song-mxh.jpeg' },
    { name: 'girl4', image: 'https://images.kienthuc.net.vn/zoomh/800/uploaded/ctvcongdongtre/2019_10_23/3/nu-sinh-bac-ninh-dep-chang-kem-hot-girl-chiem-song-mxh.jpeg' }
];
app.get('/news', (req, res) => {
    res.render('new');
});

app.post('/girls', (req, res) => {
    let name = req.body.name;
    let image = req.body.image;
    let newGirl = { name: name, image: image };
    girls.push(newGirl);
    res.redirect('/girls');
});
app.get('/', (req, res) => {
    res.render('landing');
});

app.get('/girls', function(req, res) {

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