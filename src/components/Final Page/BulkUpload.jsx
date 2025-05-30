import React, { useState } from 'react';
import hardcodedBooks from './hardcodedBooks';

const BulkUpload = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    pdf_url: '',
    category: '',
    rating: '',
    cover_image: null,
  });

  const handleBookSelect = (book) => {
    setFormData({
      ...book,
      cover_image: null, // Still manually picked
    });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      payload.append(key, value);
    });

    try {
      const res = await fetch('http://localhost:5000/api/books/upload', {
        method: 'POST',
        body: payload,
      });
      const data = await res.json();
      if (!res.ok) {
        alert(`Upload failed: ${data.message}`);
      } else {
        alert(`Uploaded: ${formData.title}`);
      }
    } catch (err) {
      console.error('Upload error:', err);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Bulk Upload</h2>

      <select
        onChange={(e) => handleBookSelect(hardcodedBooks[e.target.value])}
      >
        <option>Select a book</option>
        {hardcodedBooks.map((book, i) => (
          <option key={i} value={i}>
            {book.title}
          </option>
        ))}
      </select>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <input
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          name="pdf_url"
          value={formData.pdf_url}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="popular">Popular</option>
          <option value="recommended">Recommended</option>
          <option value="recent">Recent</option>
        </select>
        <br />
        <br />
        <input
          name="rating"
          type="number"
          step="0.1"
          value={formData.rating}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          name="cover_image"
          type="file"
          accept="image/*"
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <button type="submit">Upload Book</button>
      </form>
    </div>
  );
};

export default BulkUpload;
