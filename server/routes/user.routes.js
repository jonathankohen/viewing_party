const UserController = require('../controllers/user.controller'),
    AuthController = require('../controllers/auth.controller');

module.exports = app => {
    app.get('/api/users', UserController.all_Users);
    app.get('/api/users/:id', UserController.single_User);
    app.get('/auth/twitch', AuthController.to_twitch);
    app.get('/auth/twitch/callback', AuthController.successCallback);
    app.post('/api/users/create', UserController.create_User);
    app.put('/api/users/edit/:id', UserController.update_User);
    app.delete('/api/users/delete/:id', UserController.delete_User);
};
