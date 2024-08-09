import mongoose from 'mongoose';

import config from './config.js';

const connectDB = async () => {
    try {
        await mongoose.connect(config.dbUri);
        console.log("Database is connected successfully!")
    } catch (error) {
        console.error("Database connection error", error)
    }
}

export default connectDB;