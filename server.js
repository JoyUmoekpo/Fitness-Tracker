const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const apiRoutes = require("./routes/apiRoutes.js");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(morgan("dev"));

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Fitness-Tracker", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useFindAndModify: false,
});

app.use(apiRoutes);
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});