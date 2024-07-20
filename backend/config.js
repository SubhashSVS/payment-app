require('dotenv').config();

module.exports = {
    JWT_SECRET: process.env.JWT_SECRET,
    MongoURL: process.env.MONGO_URL
};
