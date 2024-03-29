const express = require('express');
const { body } = require('express-validator')

const router = express.Router();
const blogController = require('../controllers/blog')

// [POST] : /v1/blog/create
router.post('/post', [
    body('title').isLength({ min: 5 }).withMessage("Tittle Tidak Sesuai minimal 5 karakter"),
    body('description').isLength({ min: 5 }).withMessage("Description tidak sesuai minimal 5 karakter")],
    blogController.create);

router.get('/posts', blogController.getAll);
router.get('/post/:postId', blogController.getById);

router.put('/post/:postId', [
    body('title').isLength({ min: 5 }).withMessage("Tittle Tidak Sesuai minimal 5 karakter"),
    body('description').isLength({ min: 5 }).withMessage("Description tidak sesuai minimal 5 karakter")],
    blogController.updateBlogPost);

router.delete('/post/:postId', blogController.deleteBlogPost)

module.exports = router;