const { validationResult } = require('express-validator')

const BlogPost = require('../models/blog');

exports.create = (req, res, next) => {
    const title = req.body.title;
    // const image = req.body.image;
    const description = req.body.description;
    // const dateNow = req.body.date;
    // const date = new Date();
    // const dateNow = date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate();

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const err = new Error("invalid value")
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;
    }

    const Posting = new BlogPost({
        title: title,
        description: description,
        author: { uid: 1, name: "Jokori" }
    });

    Posting.save()
        .then(result => {
            res.status(201).json({
                message: "Create Blog Post Success",
                data: result
            });
        }).catch(err => {
            console.log("err: ", err);
        });

}