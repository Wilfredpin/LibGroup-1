import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ColorSchemesExample from "./Navigation Bar";
import ActiveExample from "./Hero Section/Button";
import ShapeExample from "./Hero Section/Image";
import BookCard from "./Recent/Recent";
import MyComponent from "./Comment/Comment";
import Footer from "./Footer/Footer";
function App() {
  return (
    <div className="App">
      <ColorSchemesExample />
      <div className="bg">
        <h1>
          Find the book you’re looking for easier read
          <br />
          right way
        </h1>
        <p>The most appropriate book site to search book </p>
        <ActiveExample />
      </div>

      <div className="showcase">
        <h1>Book Showcase</h1>
        <ShapeExample />
      </div>

      <div className="recents">
        <h1>Recent</h1>
        <BookCard />
      </div>

      <div className="comment">
        <h1>Comment</h1>
        <MyComponent />
      </div>

      <div className="CTA">
        <ActiveExample />
      </div>

      <Footer />
    </div>
  );
}

export default App;
