const express = require('express');
const app = express();
const port = 3000;
require('dotenv').config();
const bodyParser = require('body-parser');

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);

    }
);
