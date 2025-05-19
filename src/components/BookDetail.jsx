import React from "react";
import { useParams } from "react-router-dom";

const BookDetail = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Book Detail Page</h2>
      <p>Book ID: {id}</p>
      {/* Additional book details can be fetched and displayed here */}
    </div>
  );
};

export default BookDetail;
