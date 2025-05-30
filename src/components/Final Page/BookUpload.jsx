import React, { useState } from 'react';

const BookUpload = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    pdf_url: '',
    category: 'popular',
    rating: '',
    cover_image: null,
  });

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
        console.error('Upload failed:', data.message);
        alert('Upload failed.');
      } else {
        alert('Book uploaded successfully!');
        setFormData({
          title: '',
          author: '',
          description: '',
          pdf_url: '',
          category: 'popular',
          rating: '',
          cover_image: null,
        });
      }
    } catch (err) {
      console.error('Error uploading book:', err);
      alert('Upload error.');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Upload New Book</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <input
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          name="pdf_url"
          placeholder="PDF URL"
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
          placeholder="Rating"
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

export default BookUpload;
