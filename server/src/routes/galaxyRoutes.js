
const express = require("express");
const GalaxyApi = require("../models/GalaxyModel");

//--------------- ACTIVATE ROUTER ---------------//

const router = express.Router();

//--------------- GET ROUTES ---------------//

router.get("/", (request, response) => {
    response.send("Hi there - you've come to the galaxy route");
});

router.get('/all', async (request, response, next) => {

    console.log(request.body)
      try  {
        const allGalaxies = await GalaxyApi.find();
        response.json({
          status: {
              code: 200,
              message: "Success"
            },
          data: allGalaxies
        });
      } catch (err){
        response.send(err)
      }
  });

//--------------- POST ROUTES ---------------//

router.post('/newgalaxy', async (request, response) => {
    try {
      console.log(request.body);
      const newGalaxy = await GalaxyApi.create(request.body);
      response.status(201);
      response.json({data: newGalaxy, message : "galaxy successfully created"});
    } catch(err){
      console.log(err);
      response.status(500);
      response.json({ message : 'Did not save to database'});
      
    }
  });

//--------------- PATCH ROUTES ---------------//

router.patch("/updategalaxy/:id", (request, response) => {
    console.log(request.params.id);
    console.log(request.body);
    GalaxyApi.findByIdAndUpdate(request.params.id, request.body, {new: true})
    .then((data) => {
        response.json(data);
        console.log(data);
    })
    .catch(() => {
    response.status(404).send("Sorry - there isn't a galaxy that matches that id");
    });
    console.log(`${request.body.galaxyName} successfully updated`);
});

//--------------- DELETE ROUTES ---------------//

router.delete("/deletegalaxy/:id", (request, response) => {
    console.log(request.params.id);
    console.log(request.body);
    GalaxyApi.findByIdAndDelete(request.params.id)
    .then((data) => {
        response.send(`${request.body.galaxyName} has been deleted`)
        console.log(`${request.body.galaxyName} has been deleted`);
    })
    .catch(() => {
    response.status(404).send("Sorry - there isn't a galaxy that matches that id");
    });
});

//--------------- EXPORT ---------------//

module.exports = router;