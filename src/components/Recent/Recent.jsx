import React from "react";
import Rectangle67 from "../Images/Rectangle 67.png";
import Rectangle68 from "../Images/Rectangle 68.png";
import Rectangle69 from "../Images/Rectangle 69.png";
import Rectangle70 from "../Images/Rectangle 70.png";
import Rectangle71 from "../Images/Rectangle 71.png";
import Rectangle72 from "../Images/Rectangle 72.png";

const books = [
  {
    title: "The Late Winter",
    author: "R.J Aubrey",
    image: Rectangle67,
  },
  {
    title: "Red Night",
    author: "James A. Walkings",
    image: Rectangle68,
  },
  {
    title: "2 Truths 1 Lie",
    author: "Joe Allen",
    image: Rectangle69,
  },
  {
    title: "What Went Wrong",
    author: "Jon Snow",
    image: Rectangle70,
  },

  {
    title: "Hours In Silence",
    author: "Joseph Webster",
    image: Rectangle71,
  },

  {
    title: "Who, What, When & WHY",
    author: "Jacques Scott II",
    image: Rectangle72,
  },
];

const BookCard = () => {
  return (
    <div>
      <div className="book-grid">
        {books.map((book, index) => (
          <div key={index} className="book-card">
            <img src={book.image} alt={book.title} className="book-image" />
            <div className="book-info">
              <h2 className="book-title">{book.title}</h2>
              <p className="book-author">{book.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookCard;
