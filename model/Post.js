const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Post Title is required"],
        trim: true
    },

    desc: {
        type: String,
        required: [true, "Post desc is required"],
        trim: true
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tblcategory",
        required: [true, "Post category is required"],
        trim: true
    },

    post_views: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "tblusers",
        trim: true
    }],

    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "tblusers",
    }],

    dislike: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "tblusers"
    }],

    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tbluser",
    },

    image: {
        type: String,
        required: [true, "Post image  is required"],
        trim: true
    }
}, {
    timestamps: true
});

const users = mongoose.model('tblpost', postSchema); // Convert table to plural just like Laravel

module.exports = users;
