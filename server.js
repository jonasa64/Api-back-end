const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./util/database');
const shirt = require('./app/models/Tshirt');
const size = require('./app/models/Size');
const shirts = require('./app/routes/Tshirts');

const app = express();
app.use(cors());


sequelize.sync();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));








app.get('/', (req, res) => {
    res.send('i am working');
})

require('./app/routes/Tshirts')(app);
require('./app/routes/Sizes')(app);


const port = 3000 || process.env.port;

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});


