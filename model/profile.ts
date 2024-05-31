import mongoose from 'mongoose';

const ProfileSchema = new mongoose.Schema({
    avatar : {type: Buffer},
    name : {type: String},
    phoneNumber: {type: String},
    
})

module.exports = mongoose.model('Profile', ProfileSchema)