import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        if(!process.env.MONGODB_URI){
            throw new Error('MONGODB_URI environment varibale is not set!')
        }
        const mongoURI = process.env.MONGODB_URI;
        await mongoose.connect(mongoURI)
        console.log('MongoDB connected successfully!');
    }
    catch(error) {
        console.log(error)
        process.exit(1)
    }
};

export default connectDB;