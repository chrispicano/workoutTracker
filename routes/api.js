const router = require("express").Router();
const db = require('../models/');


router.get('/api/workouts', (req, res) => {
    console.log("In get request");
    db.Workout.aggregate([{
        $addFields: {
            totalDuration: {$sum: "$exercises.duration"}
        }
    }])
    .then((dbWorkout) => {
        console.log(dbWorkout);
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

router.get('/api/workouts/range', (req, res) => {
    db.Workout.aggregate([{
        $addFields: {
            totalDuration: {$sum: "$exercises.duration"}
        }
    }])
      // .sort({ _id: -1 })
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  
  router.post('/api/workouts', (req, res) => {
    
    db.Workout.create({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
  
  router.put('/api/workouts/:id', ({ body, params }, res) => {
    db.Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true, runValidators: true }
    )
      .then((dbWorkouts) => {
        res.json(dbWorkouts);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  
  module.exports = router;
  