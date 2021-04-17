const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: String,
    password: String
});

//--------------- EXPORT ---------------//

module.exports = mongoose.model("UserCollection", userSchema);