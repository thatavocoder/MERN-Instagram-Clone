const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const Post = mongoose.model('Post');

router.post('/createPost', requireLogin, (req, res) => {
    const { title, body } = req.body;
    if (!title || !body) {
        return res.status(422).json({
            message: 'Please enter title and body'
        });
    }
    const post = new Post({
        title,
        body,
        postedBy: req.user
    })
    req.user.password = undefined;
    post.save()
        .then(result => {
            res.json({
                message: 'Post created successfully',
                post: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.get('/getAllPosts', (req, res) => {
    Post.find()
        .populate('postedBy', '_id name')
        .then(posts => {
            res.json({
                posts
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.get('/myPosts', requireLogin, (req, res) => {
    Post.find({ postedBy: req.user._id })
        .populate('postedBy', '_id name')
        .then(myPosts => {
            res.json({
                myPosts
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
})

module.exports = router