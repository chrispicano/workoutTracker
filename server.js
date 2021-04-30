const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");

const PORT = 8080;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));
app.use(morgan("dev"));

mongoose.connect("mongodb://localhost/workouttracker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

app.listen(PORT, () => {
    console.log("app running on PORT: ",PORT);
})