const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const pets = require('./pets/pets');

const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type - application/json
app.use(bodyParser.json());
//allow cors
app.use(cors());

app.use('/', pets);

app.listen(port,"localhost");
