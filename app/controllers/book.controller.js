const db = require("../models");
const Book = db.books;

// Create and Save a new BOOK
exports.create = (req, res) => {
      // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        year: req.body.year,
        ISBN: req.body.ISBN
      });
      // Save Tutorial in the database
      book
        .save(book)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Book."
          });
        });
  
};
