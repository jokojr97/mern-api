const { validationResult } = require('express-validator')

exports.create = (req, res, next) => {
    const title = req.body.title;
    const image = req.body.image;
    const description = req.body.description;
    const dateNow = req.body.date;
    // const date = new Date();
    // const dateNow = date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate();

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const err = new Error("invalid value")
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;
    }

    const result = {
        message: "Create Blog Post Success",
        data: {
            uid: 1,
            title: title,
            description: description,
            image: image,
            date: dateNow
        }
    }

    res.status(201).json(result);

}