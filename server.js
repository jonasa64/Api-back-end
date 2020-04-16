const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./util/database');

const app = express();
app.use(cors());

app.use(bodyParser.json)

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('I am working');
})

sequelize.sync()
    .then()
    .catch(err => console.log(`error while syncing data  ${err}`));


const port = 3000 || process.env.port;

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});