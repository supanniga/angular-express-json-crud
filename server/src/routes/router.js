const express = require('express')
const router = express.Router()
const bookService = require('../services/bookService')

// Create
router.post('/book', bookService.createBookObj)
// Read All
router.get('/books', bookService.getBookList)
// Read One
router.get('/book/:id', bookService.getBookObjById)
// Update
router.post('/book/:id', bookService.updateBookObjById)
// Delete
router.delete('/book/:id', bookService.deleteBookObjById)

module.exports = router;