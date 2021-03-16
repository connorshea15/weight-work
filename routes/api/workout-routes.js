const router = require('express').Router();
const { User, Workout } = require('../../models');
const { Op } = require('sequelize');

// GET /api/workouts
// I can use this api to get all workout names and provide them in the dropdown
router.get('/:id', (req, res) => {
    // Access our User model and run .findAll() method)
    Workout.findAll({
        attributes: ['id', 'name', 'date_created'],
        where: {
            user_id: req.params.id
        },
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
      .then(dbWorkoutData => res.json(dbWorkoutData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// I can use this api to get all workouts for a dude within a date range
router.get('/gains', (req, res) => {
    // Access our User model and run .findAll() method)
    Workout.findAll({
        attributes: ['id', 'name', 'date_created'],
        where: {
            user_id: req.body.id,
            name: req.body.name,
            date_created: {
                [Op.between]: [req.body.first_date, req.body.second_date]
            }
        },
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
      .then(dbWorkoutData => res.json(dbWorkoutData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

// GET /api/workouts/1
// get a single workout based on the workout id
router.get('/:id', (req, res) => {
    Workout.findOne({
      attributes: ['id', 'name', 'created_at', 'sets', 'reps'],
      where: {
        name: req.body.name,
        user_id: req.params.id
      },
      include: [
        {
            model: User,
            attributes: ['username']
        }
      ]
    })
      .then(dbWorkoutData => {
        if (!dbWorkoutData) {
          res.status(404).json({ message: 'We could not find this workout!' });
          return;
        }
        res.json(dbWorkoutData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// POST /api/workouts
router.post('/', (req, res) => {
    Workout.create({
        name: req.body.name,
        sets: req.body.sets,
        reps: req.body.reps,
        weight: req.body.weight,
        notes: req.body.notes,
        user_id: req.body.user_id
    })
        .then(dbWorkoutData => res.json(dbWorkoutData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// PUT /api/workouts/1
router.put('/:id', (req, res) => {
    Workout.update(req.body, {
        where: {
            id: req.params.id
        }
    })
        .then(dbWorkoutData => {
            if (!dbWorkoutData[0]) {
                res.status(404).json({ message: 'We could not find this workout! You must be trippin...' });
                return;
            }
            res.json(dbWorkoutData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// DELETE /api/users/1
router.delete('/:id', (req, res) => {
    Workout.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbWorkoutData => {
        if (!dbWorkoutData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbWorkoutData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;