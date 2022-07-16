exports.createProduct = (req, res, next) => {
    console.log('request: ', req.body)
    res.json({
        message: "create product success",
        data: {
            id: 1,
            product: "susu beruang",
            price: "100000"
        }
    });
    next();
}

exports.getAllProduct = (req, res, next) => {
    res.json({
        message: "get all product success",
        data: [{
            id: 1,
            product: "susu beruang",
            price: "100000"
        }, {
            id: 2,
            product: "susu babi",
            price: "10000"
        }]
    });
    next();
}

