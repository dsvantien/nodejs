const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

mongoose.connect('mongodb://localhost/data1');
var dataSchema = new mongoose.Schema({
    name: String,
    image: String,
    type: String,
    author: String,
    link: String
});
var bookItem = mongoose.model('bookItem', dataSchema);
// bookItem.find({}, (err, book) => {
//         console.log(book)
//     })
// bookItem.create({
//     name: "Hóa Sinh Lâm Sàng",
//     image: 'https://sachvui.com/cover2/2018/hoa-sinh-lam-sang.jpg',
//     type: "Y Học - Sức Khỏe",
//     author: "ĐH Y Hà Nội",
//     link: "https://sachvui.com/download/pdf/7009"
// }, (err, bookItem) => {
//     if (err) {
//         console.log('database have not created');
//     } else {
//         console.log(bookItem);
//     }
// });

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
app.get('/type/:id', (req, res) => {
    bookItem.find({}, (err, allBookItems) => {
        if (err) {
            console.log('not find data');
        } else {
            res.render('typebook', { allBookItems });
        }
    })

})
app.get('/ebook/:id', (req, res) => {
    bookItem.findById(req.params.id, (err, bookid) => {
        if (err) {
            res.redirect('/kinangsong');
        } else {
            res.render('Detail', { bookid });
        }
    })

})
app.post('/search', (req, res) => {
    let results = req.body.search;
    res.render('searchPage', { results });
    res.redirect('/search');

})

var port = process.env.port || 3000;
var host = process.env.host || "0.0.0.0"
app.listen(port, host, (err) => {
    if (err) {
        console.log('something wrong');
    } else {
        console.log('server connected at port ' + port);
        console.log(host);
    }
})