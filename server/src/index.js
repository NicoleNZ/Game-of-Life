const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//--------------- ROUTERS ---------------//

const internalRouter = require("./routes/internalRoutes");
const userRouter = require("./routes/userRoutes");
const lifeRouter = require("./routes/lifeRoutes");

//--------------- MONGOOSE ---------------//

mongoose.connect("mongodb://localhost:27017/gameoflife", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//--------------- APP ---------------//

const app = express();
app.use(express.json());
app.use(cors());


app.use("/internal", internalRouter);
app.use("/api/auth", userRouter);
app.use("/api/life", lifeRouter);

//--------------- PORT ---------------//

const port = 4000;
app.listen(port, () => {
    console.log(`Hi there - this app is listening at http://localhost:${port}`)
});