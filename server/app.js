const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const { MONGOURI } = require('./keys');

const PORT = process.env.PORT || 5000;

mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on('connected', () => {
    console.log('connected to mongo instance');
})
mongoose.connection.on('error', (error) => {
    console.log(`error connecting to mongo ${error}`);
})

require('./models/user');
require('./models/post');

app.use(express.json());
app.use(cors());

app.use(require('./routes/auth'));
app.use(require('./routes/post'));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})