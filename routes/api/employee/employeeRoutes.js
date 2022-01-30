const router = require('express').Router();
const Employee = require('../../../models/Employee');
const questions = require('../../../lib/questions');

router.post('/', async (req, res) => {
    const employeeData = await Employee.create(req.body);
  
    return res.json(employeeData);
  });

router.put('/:book_id', async (req, res) => {
    const bookData = await Book.update(
      {
        title: req.body.title,
        author: req.body.author,
        isbn: req.body.isbn,
        pages: req.body.pages,
        edition: req.body.edition,
        is_paperback: req.body.is_paperback,
      },
      {
        where: {
          book_id: req.params.book_id,
        },
      }
    );
  
    return res.json(bookData);
  });

  module.exports = router;