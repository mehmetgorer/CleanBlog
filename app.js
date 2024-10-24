const express = require('express');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
const Post = require('./models/post');
const methodOverride = require('method-override');

mongoose.connect('mongodb://localhost/cleanblog-test-db');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

// Ana sayfa
app.get('/', async (req, res) => {
    const posts = await (await Post.find({})).reverse();
    res.render('site/index', { posts });
});

// Tüm postları listeleme
app.get('/posts', async (req, res) => {
    const posts = await (await Post.find({})).reverse();
    res.render('site/myposts', { posts });
});

// Hakkında sayfası
app.get('/about', (req, res) => {
    res.render('site/about');
});

// Yeni post ekleme sayfası
app.get('/addPost', (req, res) => {
    res.render('site/add_post');
});

// Yeni post ekleme
app.post('/new-post', async (req, res) => {
    await Post.create(req.body);
    res.redirect('/');
});

// Belirli bir postu görüntüleme
app.get('/posts/:id', async (req, res) => {
    const id = req.params.id;
    const posts = await Post.find({ _id: id });
    res.render('site/post.ejs', { posts });
});

// Post düzenleme sayfası
app.get('/posts/:id/edit', async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findById(id);
        res.render('site/edit_post', { post });
    } catch (err) {
        res.status(500).send('Düzenleme sayfası yüklenirken bir hata oluştu');
    }
});

// Post güncelleme
app.put('/posts/:id', async (req, res) => {
    const { id } = req.params;
    const { title, detail } = req.body;
    try {
        await Post.findByIdAndUpdate(id, { title, detail });
        res.redirect('/'); // Ana sayfaya geri yönlendir
    } catch (err) {
        res.status(500).send('Güncellenirken bir hata oluştu');
    }
});

// Post silme
app.delete('/posts/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Post.findByIdAndDelete(id);
        res.redirect('/'); // Ana sayfaya geri yönlendir
    } catch (err) {
        res.status(500).send('Silinirken bir hata oluştu');
    }
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Proje aktif");
});
