import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    title: {type: String},
    comment: {type: String, required: true}
})

module.exports = mongoose.model('Comment', CommentSchema)