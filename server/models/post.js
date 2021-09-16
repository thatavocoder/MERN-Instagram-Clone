const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types;

const postSchema = new mongoose.Schema({
    caption: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        default: 'https://i.imgur.com/XkY9Y9Y.jpg'
    },
    postedBy: {
        type: ObjectId,
        ref: 'User',
    }
})

mongoose.model('Post', postSchema);