import React, { useState, useEffect } from 'react';
import './recent.css';

const authors = [
  'Jessica Rhodes',
  'Jefferson Bricks',
  'Jane McLyne',
  'Jorn van Dijk',
  'Krijin Rijshouwer',
  'Benjamin den Boer',
];

const StarRating = ({ count }) => (
  <div className="stars">
    {[...Array(5)].map((_, i) => (
      <span key={i} className={i < count ? 'active' : ''}>
        ★
      </span>
    ))}
  </div>
);

const BookBrowser = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/books/recent?limit=6')
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.books || []);
      })
      .catch((err) => {
        console.error('Failed to load recent books:', err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="book-browser-container">
      <div className="browse-section">
        <h2>Recents</h2>
        {loading ? (
          <p>Loading recent books...</p>
        ) : (
          <div className="book-grids">
            {books.map((book, index) => (
              <div key={index} className="book-card1">
                <img
                  src={`http://localhost:5000${book.cover_image}`}
                  alt={book.title}
                />
                <div className="book-info">
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
                  <StarRating count={Math.round(book.rating || 0)} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="authors-section">
        <h2>Authors</h2>
        <div className="authors-list">
          {authors.map((name, index) => (
            <div key={index} className="author-item">
              <img
                className="author-avatar"
                src={`https://i.pravatar.cc/150?img=${index + 1}`}
                alt={name}
              />
              <span className="author-name">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookBrowser;
