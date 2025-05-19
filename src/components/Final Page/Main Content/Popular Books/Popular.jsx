import React from "react";
import "./PopularBooks.css";
import dutch from "./Images/Dutch.jpg";
import hunger from "./Images/The_Hunger_Games.jpg";
import harry from "./Images/Harry.jpg";
import hobbit from "./Images/Hobbit.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBook } from "@fortawesome/free-solid-svg-icons";
import height from "./Images/Wuthering.jpg";
import BookBrowser from "./Recents";

const books = [
  {
    id: 1,
    cover: height,
    title: "",
    author: "Kathian Brands",
    large: true,
    pdf: "/pdfs/book1.pdf",
  },
  {
    id: 2,
    cover: dutch,
    title: "Learn Dutch Fast",
    author: "John Doe",
    description:
      "It's aimed at intermediate to advanced learners and emphasizes listening.",
    pdf: "https://theswissbay.ch/pdf/Books/Linguistics/Mega%20linguistics%20pack/Indo-European/Germanic/Dutch%2C%20Teach%20Yourself%20%28Quist%20%26%20Strik%29.pdf",
  },
  {
    id: 3,
    cover: harry,
    title: "Harry Potter and the Philosopher's Stone",
    author: "Jane Doe",
    description:
      "Harry discovers he's a wizard and starts his magical journey at Hogwarts.",
    pdf: "https://kvongcmehsanalibrary.wordpress.com/wp-content/uploads/2021/07/harrypotter.pdf",
  },
  {
    id: 4,
    cover: hunger,
    title: "Hunger Games",
    author: "Maria Semple",
    description:
      "Katniss fights to survive in a deadly game where only one can win.",
    pdf: "https://online.fliphtml5.com/elbz/nodb/#p=1",
  },
  {
    id: 5,
    cover: hobbit,
    title: "The Hobbit",
    author: "Alex Smith",
    description:
      "Bilbo joins dwarves on an adventure to steal treasure from a dragon.",
    pdf: "https://primarysite-prod-sorted.s3.amazonaws.com/gobowen-primary-school/UploadedDocument/db3a2424ab834ade94f16606d5567712/the-hobbit-1.pdf",
  },
];

const PopularBooks = () => {
  return (
    <div className="popular-container">
      <div className="header">
        <h2>Popular Books</h2>
        <a href="#">see more</a>
      </div>

      <div className="books-grid">
        <div className="book-card6 large">
          <img src={books[0].cover} alt={books[0].title} />
        </div>

        <div className="right-books">
          {books.slice(1).map((book) => (
            <div className="book-card6 small" key={book.id}>
              <img src={book.cover} alt={book.title} />
              <div className="book-info">
                <h4>{book.title}</h4>
                <div className="stars">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} className="un" />
                </div>

                <p>
                  {book.description
                    ? book.description
                    : "No description available."}
                </p>
                <div className="unders">
                  <div className="unders-image">
                    <p>J.k Rolling</p>
                  </div>
                  <div className="icons">
                    <FontAwesomeIcon icon={faBook} className="book-icon" />{" "}
                    <button
                      className="read-now-button"
                      onClick={() => window.open(book.pdf, "_blank")}
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

export default PopularBooks;
