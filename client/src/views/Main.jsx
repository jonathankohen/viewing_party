import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8000/api/current_user')
            .then(res => {
                setProfile(res.data);
                console.log(profile);
            })
            .catch(err => {
                console.log(err.response);
            });
    });

    return (
        <div>
            <h1>Main</h1>
            <ul>
                <li>Twitch ID:{profile.twitchId}</li>
            </ul>
            <a href="/api/logout">Logout</a>
        </div>
    );
};

export default Profile;
