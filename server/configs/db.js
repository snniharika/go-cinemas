import mongoose from 'mongoose';

const connectDB = async () => {
    try{
        const mongoURI = `${process.env.MONGODB_URI}/gocinemas`;
        console.log('Attempting to connect to:', mongoURI);
        
        mongoose.connection.on('connected', () => console.log('database connected'));
        mongoose.connection.on('error', (error) => console.log('Connection error:', error));
        
        await mongoose.connect(mongoURI);
    } catch(error) {
        console.log('Connection error:', error.message);
    }
}

export default connectDB;