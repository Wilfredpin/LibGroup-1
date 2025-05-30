const express = require('express');
const router = express.Router();
const db = require('../db');
const multer = require('multer');

// Book cover image upload setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/covers/'); // folder where images are saved
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage });

/** Upload new book */
router.post('/upload', upload.single('cover_image'), (req, res) => {
  const { title, author, description, pdf_url, category, rating } = req.body;
  const cover_image = `/uploads/covers/${req.file.filename}`;

  const query = `INSERT INTO books (title, author, description, cover_image, pdf_url, category, rating)
                 VALUES (?, ?, ?, ?, ?, ?, ?)`;

  db.query(
    query,
    [
      title,
      author,
      description,
      cover_image,
      pdf_url,
      category,
      parseFloat(rating),
    ],
    (err, result) => {
      if (err)
        return res.status(500).json({ message: 'Database error', error: err });

      res.status(201).json({
        message: 'Book uploaded successfully',
        bookId: result.insertId,
      });
    }
  );
});

/** Get books by category */
router.get('/:category', (req, res) => {
  const { category } = req.params;
  const limit = parseInt(req.query.limit);

  let query;
  let values;

  if (!isNaN(limit) && limit > 0) {
    query =
      'SELECT * FROM books WHERE category = ? ORDER BY created_at DESC LIMIT ?';
    values = [category, limit];
  } else {
    query = 'SELECT * FROM books WHERE category = ? ORDER BY created_at DESC';
    values = [category];
  }

  db.query(query, values, (err, results) => {
    if (err)
      return res.status(500).json({ message: 'Database error', error: err });
    res.status(200).json({ books: results });
  });
});

module.exports = router;
