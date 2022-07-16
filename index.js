const express = require('express')
const routerProducts = require('./src/routes/product')
const bodyParser = require('body-parser')

const app = express();
const port = 4000;
// const router = express.Router();

app.use(bodyParser.json()) // type json

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Method', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})
app.use('/', routerProducts);

app.listen(port);


