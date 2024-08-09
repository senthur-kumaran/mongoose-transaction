import express from "express";
import 'dotenv/config';
import config from "./config/config.js";
import connectDB from "./config/db.js";
import User from "./models/User.js";
import mongoose from "mongoose";

const { port } = config;

const app = express();
app.use(express.json());

connectDB();

/** Insert users */

// User.insertMany([
//     {
//         name: 'User 1',
//         balance: 1000,
//     },
//     {
//         name: 'User 2',
//         balance: 2000,
//     },
// ]);

app.post('/api/transfer', async (req, res) => {
    const { senderId, receiverId, amount } = req.body;

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const opts = { session };

        // Deduct amount from sender
        const sender = await User.findById(senderId, null, opts);
        if(sender.balance < amount) {
            res.status(400).send('Sender does not have enough balance');
        }
        sender.balance -= amount;
        await sender.save(opts);

        // Add amount to receiver
        const receiver = await User.findById(receiverId, null, opts);
        receiver.balance += amount;
        await receiver.save(opts);

        // Commit transaction
        await session.commitTransaction();
        session.endSession();

        res.send('Transaction successful');
    } catch (error) {
        // Rollback transaction
        await session.abortTransaction();
        session.endSession();

        res.status(500).send('Transaction failed');
    }
})

app.listen(port, () => {
    console.log(`Application is running on port ${port}`)
})