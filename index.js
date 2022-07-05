const express = require('express')

const app = express();
const port = 4000;
const router = express.Router();

router.use('/products', (req, res, next) => {
    // console.log("url: ", req.originalUrl);
    // console.log("method: ", req.method);
    res.json({
        name: "joko riyadi",
        email: "jokori@gmail.com"
    });
    next();
})

router.use('/price', (req, res, next) => {
    res.json({
        bareng: "komputer",
        price: "150000"
    });
    next();
})

app.use('/', router);

app.listen(port);


