const { validationResult } = require('express-validator')
const path = require('path');
const fs = require('fs');

const User = require('../models/user');

// exports.createUser = (req, res, next) => {

//     const errors = validationResult(req);

//     if (!errors.isEmpty()) {
//         const err = new Error("invalid value")
//         err.errorStatus = 400;
//         err.data = errors.array();
//         throw err;
//     }

//     const username = req.body.username;
//     const email = req.body.email;
//     const password = req.body.password;
//     const image = "user.jpg"

//     const insertUser = new User({
//         email: email,
//         username: username,
//         password: password,
//         image: image,
//         level: {
//             id: 1,
//             level: "admin"
//         },
//     });

//     insertUser.save()
//         .then(result => {
//             res.status(201).json({
//                 message: "Create User Success",
//                 data: result
//             });
//         }).catch(err => {
//             console.log("err: ", err);
//         });
// }

exports.register = (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const err = new Error("invalid value")
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;
    }

    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const image = "user.jpg"

    const insertUser = new User({
        email: email,
        username: username,
        password: password,
        image: image,
        level: {
            id: 1,
            level: "admin"
        },
    });

    insertUser.save()
        .then(result => {
            res.status(201).json({
                message: "Register Success",
                data: result
            });
        }).catch(err => {
            console.log("err: ", err);
        });
}

exports.login = (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const err = new Error("invalid value")
        err.errorStatus = 400;
        err.data = errors.array();
        throw err;
    }

    const email = req.body.email;
    const password = req.body.password;
    const data = {
        email: email,
        password: password
    }
    User.findOne(data).then(result => {
        res.status(200).json({
            message: "Login Success!",
            status: "login",
            _id: result._id,
            data: result
        })
    }).catch(err => {
        next(err);
    })
}