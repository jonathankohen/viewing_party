require('dotenv').config();

const express = require('express'),
    cors = require('cors'),
    app = express(),
    port = process.env.PORT;

require('./server/config/mongoose.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./server/routes/user.routes')(app);

app.listen(port, () => console.log(`Listening to port ${port}...`));
