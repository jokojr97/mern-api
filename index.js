const express = require('express')
const routerProducts = require('./src/routes/product')

const app = express();
const port = 4000;
// const router = express.Router();

app.use((req, res, next) => {
    req.setHeader('Access-Control-Allow-Origin', '*');
    req.setHeader('Access-Control-Allow-Method', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    req.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})
app.use('/', routerProducts);

app.listen(port);


