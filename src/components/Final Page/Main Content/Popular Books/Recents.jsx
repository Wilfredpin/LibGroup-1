import React from "react";
import "./recent.css";
import power from "./Images/power.png";
import blue from "./Images/blue.jpg";
import million from "./Images/million.jpg";
import harry from "./Images/pottter.jpg";
import crow from "./Images/crow.jpg";
import boy from "./Images/images.jpg";

const books = [
  {
    title: "Super Mario",
    author: "Jeff Ryan",
    stars: 1,
    image: power,
  },
  {
    title: "Blue is Darkness Weakened by Light",
    author: "Sarah McClarty",
    stars: 3,
    image: blue,
  },
  {
    title: "A Million Miles in a Thousand Years",
    author: "Donald Miller",
    stars: 4,
    image: million,
  },
  {
    title: "Boy Erased",
    author: "Garrard Conley",
    stars: 2,
    image: boy,
  },
  {
    title: "The Crow's Vow",
    author: "Susan Briscoe",
    stars: 4,
    image: crow,
  },
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    stars: 5,
    image: harry,
  },
];

const authors = [
  "Jessica Rhodes",
  "Jefferson Bricks",
  "Jane McLyne",
  "Jorn van Dijk",
  "Krijin Rijshouwer",
  "Benjamin den Boer",
];

const StarRating = ({ count }) => (
  <div className="stars">
    {[...Array(5)].map((_, i) => (
      <span key={i} className={i < count ? "active" : ""}>
        ★
      </span>
    ))}
  </div>
);

const BookBrowser = () => {
  return (
    <div className="book-browser-container">
      <div className="browse-section">
        <h2>Browse</h2>
        <div className="book-grids">
          {books.map((book, index) => (
            <div key={index} className="book-card1">
              <img src={book.image} alt={book.title} />
              <div className="book-info">
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <StarRating count={book.stars} />
              </div>
            </div>
          ))}
        </div>
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
