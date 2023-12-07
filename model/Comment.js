const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    desc : {
        type: String,
        required: [true, "Comemnt desc is required"],
        trim: true
    },

    desc: {
        type: String,
        required: [true, "Post desc is required"],
        trim: true
    },

    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tblpost",
    },

 
}, {
    timestamps: true
});

const users = mongoose.model('tblcomment', commentSchema); // Convert table to plural just like Laravel

module.exports = users;
