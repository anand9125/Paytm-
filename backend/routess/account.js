const express = require("express");
const { Account } = require("../db");
const router = express.Router()
const mongoose = require ("mongoose")
const{authMiddleware} = require("../routess/middlerwares")


router.get("/balance" ,authMiddleware, async(req,res)=>{
    const account = await Account.findOne({
        userId: req.userId
    });
    
    if (!account) {
        return res.status(404).json({
            message: "Account not found"
        });
    }
    
    res.json({
        message: "Success",
        balance: account.balance
    });
    
})
//node js process and databases gose down time to time so there is problm you can checkout page 10
//What if the Node.js crashes after the first update
//It would lead to a database inconsistency. if database crashes or node js crashes. Amount would get debited from the first user, and not credited into the other users account.
//If a failure ever happens, the first txn should rollback.
// we want ki ek hi bar me dono process ek sath ho ek hi bar paise debited ho aur trnt hi credited bhi ho aur koi bhi ek process nhi hota hai to process rollback ho jayega 
//kuch bhi nhi hoga na hi debited nor credited
// backend/routes/account.js


router.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();
    //Starts a new MongoDB session. This is necessary for executing transactions
    //mongoose.startSession() is essential when you want to execute transactions in MongoDB using Mongoose.
    //need ? Transactions ensure that a series of operations either all succeed or all fail, maintaining data integrity.
//Consistency: By using transactions, you can ensure that your data remains consistent even if multiple operations need to be performed.
    session.startTransaction();
    //Begins a new transaction within the session.
    // This means all database operations performed in this session are part of a single transaction.
    const { amount, to } = req.body;

    // Fetch the accounts within the transaction
    const account = await Account.findOne({ userId: req.userId }).session(session);
//.session(session) ensures that the query is executed within the transaction context.
    if (!account || account.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient balance"
        });
    }

    const toAccount = await Account.findOne({ userId: to }).session(session);

    if (!toAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account"
        });
    }

    // Perform the transfer
    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

    // Commit the transaction
    await session.commitTransaction();

    res.json({
        message: "Transfer successful"
    });
});


module.exports=router;