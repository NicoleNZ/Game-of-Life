const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken"); //this will be set up later

//--------------- ROUTERS ---------------//

const internalRouter = require("./routes/internalRoutes");

//--------------- MONGOOSE ---------------//

mongoose.connect("mongodb://localhost:27017/activities", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//--------------- APP ---------------//

const app = express();
app.use(express.json());
app.use(cors());

app.use("/internal", internalRouter);

//--------------- PORT ---------------//

const port = 4000;
app.listen(port, () => {
    console.log(`Hi there - this app is listening at http://localhost:${port}`)
});