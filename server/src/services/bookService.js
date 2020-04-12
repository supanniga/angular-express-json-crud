const bookList = require('../../../database/books.json')

module.exports = {
    getBookList: function(req, res) {
        console.log('call getBookList()')
        res.send(bookList)
    },
    getBookObjById: (req, res) => {
        console.log('call getBookObjById()')
        const id = req.params.id
        const bookObjById = bookList.find( bookObj => bookObj.id === id)
        res.send(bookObjById)
    },
    createBookObj: (req, res) => {
        console.log('call createBookObj()')
        const id = req.body.id
        const bookObjById = bookList.find( bookObj => bookObj.id === id)
        if(bookObjById) {
            const bookObjIndex = bookList.findIndex( bookObj => bookObj.id === id)
            bookList[bookObjIndex] = req.body
            res.send(bookList)
        }else {
            bookList.push(req.body)
            res.send(bookList)
        }
    },
    updateBookObjById: (req, res) => {
        console.log('call updateBookObjById()')
        const id = req.params.id
        const bookObjIndex = bookList.findIndex( bookObj => bookObj.id === id)
        bookList[bookObjIndex] = req.body
        res.send(bookList)
    },
    deleteBookObjById: (req, res) => {
        console.log('call deleteBookObjById()')
        const id = req.params.id
        const bookObjIndex = bookList.findIndex( bookObj => bookObj.id === id)
        bookList.splice(bookObjIndex, 1)
        res.send(bookList)
    }
}