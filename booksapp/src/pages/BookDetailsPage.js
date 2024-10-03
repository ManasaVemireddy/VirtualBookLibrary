import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookDetails from '../components/BookDetails/BookDetails';
import './BookDetailsPage.css'; // Import the new CSS

const BookDetailsPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:4000/api/books/${id}`)
      .then(response => setBook(response.data))
      .catch(error => console.error('Error fetching book:', error));
  }, [id]);

  return (
    <div className="book-details-page">
      <h2 className="page-heading">Book Details</h2> {/* Heading for the page */}
      <div className="book-details-container">
        {book ? <BookDetails book={book} /> : <p className="loading-message">Loading...</p>}
      </div>
    </div>
  );
};

export default BookDetailsPage;
