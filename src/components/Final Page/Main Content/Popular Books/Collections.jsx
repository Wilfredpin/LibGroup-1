import React, { useEffect, useState } from 'react';
import './Collections.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faBook } from '@fortawesome/free-solid-svg-icons';
import BookBrowser from './Recents';

const Collections = ({ onViewChange }) => {
  const [books, setBooks] = useState([]);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch(
          'http://localhost:5000/api/books/popular?limit=5'
        );

        if (!res.ok) throw new Error('Network response was not ok');

        const data = await res.json();
        setBooks(data.books);
      } catch (err) {
        console.error('Failed to fetch books:', err);
      }
    };

    fetchBooks();
  }, []);

  if (books.length === 0) {
    return <p>Loading popular books...</p>;
  }

  return (
    <div className="popular-container">
      <div className="header">
        <h2>Popular Books</h2>
        <button className="see-all" onClick={() => onViewChange('popular')}>
          See More →
        </button>
      </div>

      <div className="books-grid">
        <div className="book-card6 large">
          <div
            className="inner-book-card6 large"
            onMouseEnter={() => {
              setHovered(true);
            }}
            onMouseLeave={() => {
              setHovered(false);
            }}
          >
            <img
              src={`http://localhost:5000${books[0].cover_image}`}
              alt={books[0].title}
            />

            <div
              className={`blur-background ${
                hovered ? 'slide-up' : 'slide-down'
              }`}
            >
              <div className="book-info large">
                <h4>{books[0].title}</h4>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className={i < Math.round(books[0].rating) ? '' : 'un'}
                    />
                  ))}
                </div>
                <p>
                  {books[0].description
                    ? books[0].description
                    : 'No description available.'}
                </p>
                <div className="unders">
                  <div className="unders-image">
                    <p>{books[0].author}</p>
                  </div>
                  <div className="icons">
                    <FontAwesomeIcon icon={faBook} className="book-icon" />{' '}
                    <button
                      className="read-now-button"
                      onClick={() => window.open(books[0].pdf_url, '_blank')}
                    >
                      Read Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right-books">
          {books.slice(1).map((book) => (
            <div className="book-card6 small" key={book.id}>
              <img
                src={`http://localhost:5000${book.cover_image}`}
                alt={book.title}
              />
              <div className="book-info">
                <h4>{book.title}</h4>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon
                      key={i}
                      icon={faStar}
                      className={i < Math.round(book.rating) ? '' : 'un'}
                    />
                  ))}
                </div>

                <p>
                  {book.description
                    ? book.description
                    : 'No description available.'}
                </p>
                <div className="unders">
                  <div className="unders-image">
                    <p>{book.author}</p>
                  </div>
                  <div className="icons">
                    <FontAwesomeIcon icon={faBook} className="book-icon" />{' '}
                    <button
                      className="read-now-button"
                      onClick={() => window.open(book.pdf_url, '_blank')}
                    >
                      Read Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BookBrowser />
    </div>
  );
};

export default Collections;
