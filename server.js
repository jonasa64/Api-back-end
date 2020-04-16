const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./util/database');
const shirt = require('./app/models/Tshirt');
const size = require('./app/models/Size');

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

shirt.hasMany(size);
size.belongsTo(shirt);

/*
shirt.create({
    Name: 'Polo shirt',
    Color: 'Blue',
    Price: 30.50,
    Description: 'Blue polo shirt to the hot summer days',
    ImageUrl: 'https://live.staticflickr.com/65535/49111529803_75f5ba54d3.jpg'
}).then(shirt => console.log(shirt))
    .catch(err => console.log(err));*/

size.create({
    size: 'small',
    shirtId: 3
}).then(size => console.log(size))
    .catch(err => console.log(err))



const port = 3000 || process.env.port;

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
