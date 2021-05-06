const mongoose = require("mongoose");

const galaxySchema = mongoose.Schema({
    galaxyName: String,
    galaxyType: String,
    galaxyFact: String,
    galaxyUrl: String
});

//--------------- EXPORT ---------------//

module.exports = mongoose.model("GalaxyCollection", galaxySchema);