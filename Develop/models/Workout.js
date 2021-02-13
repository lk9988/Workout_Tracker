const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Workout = new Schema({
	day: Date,
	exercises: [
		{
			type: String,
			// need to be required
			name: String,
			// need to be required
			duration: Number,
			weight: Number,
			reps: Number,
			sets: Number,
			distance: Number,
		},
	],
});
