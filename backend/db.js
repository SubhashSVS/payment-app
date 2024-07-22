const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {MongoURL} = require('./config');

mongoose.connect(MongoURL);

const userSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : true,
        trim :true,
        minLength : 3,
        maxLength : 30  
    },
    password_hash : {
        type : String,
        required : true,
        minLength : 8
    },
    firstName : {
        type : String,
        required : true,
        trim : true,
        maxLength : 40
    },
    lastName : {
        type : String,
        required : true,
        trim : true,
        maxLength : 30
    }
});

userSchema.methods.createHash = async function(password){
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password,salt);
}

userSchema.methods.validatePassword = async function(password){
    return await bcrypt.compare(password,this.password_hash);
}

const accountSchema = mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    balance : {
        type : Number,
        required : true
    }
})


const User = mongoose.model('User',userSchema);
const Account = mongoose.model('Account',accountSchema);

module.exports = {
    User, Account
};
