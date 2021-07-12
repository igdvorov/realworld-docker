const mongoose = require('mongoose')
const { db } = require("../configutation")

module.exports.connectDb = () => {
    mongoose.connect(db, { useNewUrlParser: true });

    return mongoose.connection;
};