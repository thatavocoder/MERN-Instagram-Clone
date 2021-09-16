const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../keys');

router.post('/signup', (req, res) => {
    const { name, username, email, password, profile_picture, bio } = req.body;
    if (!name || !username || !email || !password) {
        return res.status(422).json({ message: 'Please enter all fields', success: false });
    }
    User.findOne({ username: username })
        .then(savedUser => {
            if (savedUser) {
                return res.status(422).json({ message: 'Username taken', success: false });
            }
            bcrypt.hash(password, 12)
                .then(hashedPassword => {
                    const user = new User({
                        name,
                        username,
                        email,
                        password: hashedPassword,
                        profile_picture,
                        bio,
                    })
                    user.save()
                        .then(user => {
                            res.json({ message: 'User created successfully', success: true });
                        })
                        .catch(err => {
                            console.log(err)
                        })
                })
                .catch(err => {
                    console.log(err)
                })
        })
        .catch(err => {
            console.log(err)
            res.json({ error: 'Something went wrong', success: false })
        })
})

router.post('/signin', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(422).json({ message: 'Please enter all fields', success: false });
    }
    User.findOne({ username: username })
        .then(savedUser => {
            if (!savedUser) {
                return res.status(422).json({ message: "Invalid username or password", success: false });
            }
            bcrypt.compare(password, savedUser.password)
                .then(doMatch => {
                    if (doMatch) {
                        const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
                        res.json({
                            message: "Successfully signed in",
                            success: true,
                            token: token,
                            name: savedUser.name,
                            email: savedUser.email,
                            username: savedUser.username,
                            profile_picture: savedUser.profile_picture,
                            bio: savedUser.bio
                        })
                    } else {
                        return res.status(422).json({ message: "Invalid username or password", success: false });
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        })
        .catch(error => {
            console.log(error)
        })
})

module.exports = router;