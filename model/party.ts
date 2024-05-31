import mongoose from "mongoose";

const PartySchema = new mongoose.Schema({
    name: {type: String},
    hostName: {type: String, required: true},
    partyId: { type: String, required: true, unique: true },
    coHosts : [{type: mongoose.Schema.Types.ObjectId, ref:'User'}],
    friends: [{type: mongoose.Schema.Types.ObjectId, ref:'User'}],
    playlist: [
        {
        title: { type: String },
        artist: { type: String },
        album: { type: String },
        uri: { type: String }, // Spotify song URI
      },
    ],
    dateOf: {type: Date},
    description: {type: String},
    location: { type: String },
    comments: [{type: mongoose.Schema.Types.ObjectId, ref:'Comment'}]
})

module.exports = mongoose.model('Party', PartySchema)