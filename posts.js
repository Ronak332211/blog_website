const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/new', (req, res) => {
    res.render('newpost');
});

router.post('/', async (req, res) => {
    try {
        const newPost = new Post({
            title: req.body.title,
            content: req.body.content
        });
        await newPost.save();
        res.redirect('/');
    } catch (err) {
        console.log(err);
        res.send('An error occurred');
    }
});

router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.render('post', { post: post });
    } catch (err) {
        console.log(err);
        res.send('An error occurred');
    }
});

module.exports = router;
