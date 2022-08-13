const { validationResult } = require('express-validator')

const BlogPost = require('../models/blog');

exports.create = (req, res, next) => {
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

    if (!req.file) {
        const err = new Error("image Harus di isi")
        err.errorStatus = 422;
        throw err;
    }

    const title = req.body.title;
    const image = req.file.path;
    const description = req.body.description;

    const Posting = new BlogPost({
        title: title,
        description: description,
        image: image,
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

exports.getAll = (req, res, next) => {
    BlogPost.find().then(result => {
        res.status(200).json({
            message: "Data Berhasil ditampilkan!",
            data: result
        })
    }).catch(err => {
        next(err)
    });
}

exports.getById = (req, res, next) => {
    const postId = req.params.postId;
    BlogPost.findById(postId).then(result => {
        if (!result) {
            const error = new Error("Postingan tidak ditemukan");
            error.errorStatus = 404;
            throw error;
        }
        res.status(200).json({
            message: "Data Berhasil ditampilkan!",
            data: result
        })
    }).catch(err => {
        next(err);
    });

}


exports.updateBlogPost = (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const err = new Error("invalid value")
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;
    }

    if (!req.file) {
        const err = new Error("image Harus di isi")
        err.errorStatus = 422;
        throw err;
    }

    const title = req.body.title;
    const image = req.file.path;
    const description = req.body.description;

    const postId = req.params.postId;
    BlogPost.findById(postId).then(post => {
        if (!post) {
            const error = new Error("Postingan tidak ditemukan");
            error.errorStatus = 404;
            throw error;
        }


        post.title = title;
        post.description = description;
        post.image = image;

        return post.save();

    }).then(result => {
        res.status(201).json({
            message: "Update Blog Post Success",
            data: result
        });
    }).catch(err => {
        next(err);
    });



}
