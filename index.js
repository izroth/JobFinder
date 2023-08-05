const express = require('express');
const app = express();
const port = 3001;
require('./Db/Db');
require('dotenv').config();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const register = require('./routes/Register');


app.use('/register',register)


app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);

    }
);
app.get('/', (req, res) => res.send('Hello World!'));