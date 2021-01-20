const User = require('../models/user.models'),
    passport = require('passport');

module.exports = {
    to_twitch: (req, res) => {
        passport
            .authenticate('twitch', { forceVerify: true })
            .then(console.log(req, res))
            .catch(err => res.status(400).json(err));
    },

    successCallback: (req, res) => {
        passport
            .authenticate('twitch')
            .then(() => {
                console.log(req, res);
                redirect('/profile');
            })
            .catch(err => {
                res.status(400).json(err);
                redirect('/');
            });
    },
};
