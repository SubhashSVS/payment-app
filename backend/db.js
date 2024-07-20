const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const {MongoURL} = require('./config');

mongoose.connect(MongoURL);

const userSchema = new mongoose.Schema({
    userName : String,
    password_hash : String,
    firstName : String,
    lastName : String
});

userSchema.methods.createHash = async function(password){
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password,salt);
}

userSchema.methods.validatePassword = async function(password){
    return await bcrypt.compare(password,this.password_hash);
}

const User = mongoose.model('User',userSchema);

module.exports = User;
