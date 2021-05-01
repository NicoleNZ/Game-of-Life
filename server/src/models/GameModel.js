const mongoose = require("mongoose");

const gameSchema = mongoose.Schema({
    gameName: String,
    gameSpeed: Number,
});

//--------------- EXPORT ---------------//

module.exports = mongoose.model("GameCollection", gameSchema);