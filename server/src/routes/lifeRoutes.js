const express = require("express");
const GameApi = require("../models/GameModel");

//--------------- ACTIVATE ROUTER ---------------//

const router = express.Router();

//--------------- GET ROUTES ---------------//

router.get("/", (request, response) => {
    response.send("Hi there - you've come to the life route");
});

router.get("/all", async (request, response) => {
    try {
        const allGames = await GameApi.find();
        response.json({
            status: {
                code: 200,
                message: "Success"
            },
            data: allGames
        });
    } catch (err) {
        response.send(err)
    };
});

//--------------- POST ROUTES ---------------//

router.post("/newgame", (request, reponse) => {
    GameApi.create(request.body).then((data) => {
        console.log(data);
    });
    console.log("Yay! You've saved a game");
});

//--------------- PATCH ROUTES ---------------//



//--------------- DELETE ROUTES ---------------//



//--------------- EXPORT ---------------//

module.exports = router;