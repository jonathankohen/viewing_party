const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        twitchId: String,
    }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
