const express = require('express');
const router = express.Router();
const Post = require('../models/post');

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find({});
        res.render('index', { posts: posts });
    } catch (err) {
        console.log(err);
        res.send('An error occurred');
    }
});

module.exports = router;
