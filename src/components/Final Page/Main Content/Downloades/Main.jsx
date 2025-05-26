import React, { useState } from "react";
import "./Main.css";
import money from "./Images/The-Psychology-of-Money-by-Morgan-housel-997x1536.jpeg";
import company from "./Images/company-of-one.jpg";
import inno from "./Images/How innovation works.jpg";
import french from "./Images/Stupore E Tremori.jpg";
import PopularBooks from "../Popular Books/Popular";

const books = [
  {
    image: money,
    title: "The Psychology of Money",
    author: "Morgan Housel",
  },
  {
    image: inno,
    title: "How Innovation Works",
    author: "Matt Ridley",
  },
  {
    image: company,
    title: "Company of One",
    author: "Paul Jarvis",
  },
  {
    image: french,
    title: "Stupore E Tremori",
    author: "Amélie Nothomb",
  },
];

const Recommended = ({user}) => {
  const [showPopular] = useState(false);

  return (
    <div className="recommended">
      <div className="rec-header">
        <h2>Your Downloads</h2>
        <button className="see-all">See All →</button>
      </div>
      <div className="rec-cards">
        {books.map((b, i) => (
          <div key={i} className="rec-card">
            <img src={b.image} alt={b.title} />
            <h3>{b.title}</h3>
            <p>{b.author}</p>
          </div>
        ))}
      </div>
      {showPopular && <PopularBooks />}
    </div>
  );
};

export default Recommended;
