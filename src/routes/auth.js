const express = require('express')

const { body } = require('express-validator')
const router = express.Router();

const authController = require('../controllers/auth');

// [POST] : /v1/auth/create
// router.post('/create', [
//     body('email').isEmail().withMessage("Format Email Tidak Sesuai"),
//     body('password').isLength({ min: 5 }).withMessage("Password tidak sesuai minimal 5 karakter")],
//     authController.createUser);


// [POST] : /v1/auth/register
router.post('/register', [
    body('email').isEmail().withMessage("Format Email Tidak Sesuai"),
    body('password').isLength({ min: 5 }).withMessage("Password tidak sesuai minimal 5 karakter")],
    authController.register);


// [POST] : /v1/auth/login
router.post('/login', [
    body('email').isEmail().withMessage("Format Email Tidak Sesuai"),
    body('password').isLength({ min: 5 }).withMessage("Password tidak sesuai minimal 5 karakter")],
    authController.login);

module.exports = router;