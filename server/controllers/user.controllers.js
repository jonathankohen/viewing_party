const User = require('../models/user.models');

module.exports = {
    index: (req, res) => {
        User.find()
            .then((data) => res.json({ results: data }))
            .catch(err => res.status(400).json(err));
    },

    create: (req, res) => {
        User.create(req.body)
            .then((data) => res.json({ results: data }))
            .catch(err => res.status(400).json(err));
    },

    show: (req, res) => {
        User.findOne({ _id: req.params.id })
            .then((data) => res.json({ results: data }))
            .catch(err => res.status(400).json(err));
    },

    update: (req, res) => {
        User.findOneAndUpdate({ _id: req.params.id }, req.body, {
            useFindAndModify: false,
            runValidators: true,
            new: true,
        })
            .then((data) => res.json({ results: data }))
            .catch(err => res.status(400).json(err));
    },
    
    destroy: (req, res) => {
        User.deleteOne({ _id: req.params.id })
            .then((data) => res.json({ results: data }))
            .catch(err => res.status(400).json(err));
    },
};
