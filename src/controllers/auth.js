const { validationResult } = require('express-validator')
const path = require('path');
const fs = require('fs');
const bcrypt = require('bcrypt');

const saltRounds = 10;

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

exports.register = async (req, res, next) => {
    // inisiasi error validasi
    const errors = validationResult(req);

    // cek error validasi
    if (!errors.isEmpty()) {
        const err = new Error("invalid value")
        err.errorStatus = 400;
        err.data = errors.array();
        return res.status(err.errorStatus).json({
            message: "Invalid Value!",
            data: err
        })
        next()
    }

    // definisi input
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    // hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const image = "user.jpg"

    const insertUser = new User({
        email: email,
        username: username,
        password: hashedPassword,
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

exports.login = async (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const err = new Error("invalid value")
        err.errorStatus = 400;
        err.data = errors.array();
        return res.status(err.errorStatus).json({
            message: "Invalid Value!",
            data: err
        })
        next()
    }

    const email = req.body.email;
    const password = req.body.password;

    const data = {
        email: email
    }
    User.findOne(data).then(async (result) => {
        const comparePass = await bcrypt.compare(password, result.password);
        if (comparePass == true) {
            res.status(200).json({
                message: "Login Success!",
                status: "login",
                data: result
            })
        } else {
            res.status(404).json({
                message: "Email dan Password Tidak Sesuai!",
                data: null
            })
        }
    }).catch(err => {
        next(err);
    })
}