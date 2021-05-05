const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exercises: [
        {
    
        type: {
            type: String,
            required: "Please enter which type of exercise",
            trim: true
        },
        name:{
            type: String,
            required: "Please enter which name of exercise",
            trim: true
        },
        duration: {
            type: Number,
            required: "Please enter the duration of the exercise",
            trim: true
        },
        weight: {
            type: Number,
            
            trim: true
        },
        reps: {
            type: Number,
            
            trim: true
        },
        sets: {
            type: Number,
            
            trim: true
        },
        distance: {
            type: Number,
            
            trim: true
    },
}
    ],
    day: {
        type: Date,
        default: Date.now,
    },
});

const Workout = mongoose.model('Workout', workoutSchema);
module.exports = Workout;