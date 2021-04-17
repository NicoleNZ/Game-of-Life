const express = require("express");

//--------------- ACTIVATE ROUTER ---------------//

const router = express.Router();

//--------------- GET ROUTES ---------------//

router.get("/", (request, response) => {
    response.send("Hi there - you've come to the life route");
});

//--------------- EXPORT ---------------//

module.exports = router;