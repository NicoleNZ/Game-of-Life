const express = require("express");

//--------------- ACTIVATE ROUTER ---------------//

const router = express.Router();

//--------------- ROUTES ---------------//

router.get("/", (request, response) => {
    response.send("Hi there - you've come to the internal route");
});

router.get("/health", (request, response) => {
    response.send("Hello again my old friend - internal routes OK");
});

module.exports = router;