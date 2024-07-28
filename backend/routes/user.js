const express = require('express');
const userRouter = express.Router();
const zod = require('zod');
const {User, Account} = require('../db');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config');
const authMiddleware = require('../middleware');

const signUpSchema = zod.object({
    userName : zod.string().email(),
    password: zod.string(),
    firstName : zod.string(),
    lastName : zod.string()
})

userRouter.post('/signup',async (req,res)=>{

    const success = signUpSchema.safeParse(req.body);
    if(!success){
        res.status(411).json({message: "Email already taken / Incorrect inputs"});
    }
    const user = await User.findOne({
        userName : req.body.userName
    })
    if(user){
        res.status(411).json({message: "Email already taken / Incorrect inputs"});
    }
    else{
        const newUser = new User({
            userName : req.body.userName,
            firstName : req.body.firstName,
            lastName : req.body.lastName,
        })
        const hashedPassword = await newUser.createHash(req.body.password);
        newUser.password_hash = hashedPassword;
        await newUser.save();
        const userId = newUser._id;
        const newAccount = await Account.create({
            userId,
            balance : 5000
        })
        await newAccount.save();

        const jwtToken = jwt.sign({
            userId: newUser._id
        },JWT_SECRET)
        res.status(200).json({
            message: "User created successfully",
            token: jwtToken,
            id : userId
        })
    }
})

const signInSchema = zod.object({
    userName : zod.string(),
    password : zod.string()
});

userRouter.post('/signin',async (req,res)=>{
    
    const user = await User.findOne({
        userName : req.body.userName
    })
    if(user !== null){
        const isValid = await user.validatePassword(req.body.password);
        if(isValid){
            const jwtToken = jwt.sign({
                userId: user._id
            },JWT_SECRET);

            res.status(200).json({
                token: jwtToken,
                id : user._id,
                firstName : user.firstName
            });
        }else{
            res.json({
                message : "Wrong Password"
            })
        }
    }
    else{
        res.status(411).json({
            message: "Error while logging in"
        });
    }
})

const updateSchema = zod.object({
    password: zod.string(),
    firstName : zod.string(),
    lastName : zod.string()
}).partial();

userRouter.put('/',authMiddleware,async (req,res)=>{
    const success = zod.safeParse(req.body);
    if(!success){
        res.status(411).json({
            message : "Error while updating information"
        })
    }
    for(let field in success){
        await User.updateOne(
            { _id : req.userId },
            {$set : { field : success.field}}
        )
    }
    res.status(200).json({
        message : "Updated successfully"
    })
})

userRouter.get('/bulk',async (req,res)=>{
    const text = req.query.filter;
    const users = await User.find({
        $or : [
            { firstName : {"$regex" : text} },
            { lastName : {"$regex" : text} }
        ]
    })

    res.json({
        users : users.map(user => ({
            userName : user.userName,
            firstName : user.firstName,
            lastName : user.lastName,
            _id : user._id
        }))
    })
})

module.exports = userRouter ;