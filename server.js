const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(cors());

app.use(bodyParser.json)

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('I am working');
})


const port = 3000 || process.env.port;

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});