const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
	{
		day: {
			type: Date,
			default: () => new Date(),
		},
		exercises: [
			{
				type: {
					type: String,
					required: true,
				},

				name: {
					type: String,
					required: true,
				},

				duration: {
					type: Number,
					required: true,
				},
				weight: Number,
				reps: Number,
				sets: Number,
				distance: Number,
			},
		],
	},
	{
		toJSON: {
			virtuals: true,
		},
	}
);

WorkoutSchema.virtual("totalDuration").get(function () {
	return this.exercises.reduce((total, exercise) => {
		return total = total + exercise.duration;
	}, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;
