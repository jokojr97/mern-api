const express = require('express')
const routerProducts = require('./src/routes/product')
const bodyParser = require('body-parser')

const app = express();
const port = 4000;
const authRoutes = require("./src/routes/auth")
const blogRoutes = require("./src/routes/blog")
// const router = express.Router();

app.use(bodyParser.json()) // type json

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Method', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})
app.use('/v1/auth', authRoutes);
app.use('/v1/blog', blogRoutes);
app.use('/v1/customer', routerProducts);
// app.use('/', routes);

app.listen(port);


