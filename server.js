const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

require("./models");

const PORT = process.env.PORT || 4888;

const app = express();
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
	useNewUrlParser: true,
	useFindAndModify: false,
	useCreateIndex: true,
	useFindAndModify: false,
});

app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));
app.listen(PORT, () => {
	console.log(`app running on port ${PORT}`);
});
