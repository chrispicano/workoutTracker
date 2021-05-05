const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");

const PORT = 8080;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));
app.use(morgan("dev"));



mongoose.connect("mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
app.use(require("./routes/htmlRoutes.js"));
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
    console.log("app running on PORT: ",PORT);
})