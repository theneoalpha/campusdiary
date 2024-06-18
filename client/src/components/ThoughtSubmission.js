import React, { useState } from 'react';
import "../components/assets/thoughts.css";
import Navbar from "./Navbar.js";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function ThoughtSubmission() {
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/thought', { // Adjust the port if necessary
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
      });

      if (response.ok) {
        setMessage('Thought shared successfully!');
        setContent('');
      } else {
        setMessage('Failed to share thought');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage("An error is occured");
    }
  };

  return (
    <>
    <Navbar/>
    <div className='experience_container'>
      <h1>Share on Community</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          required
         
        ></textarea>
        <button type="submit" className='button button-outline thoughtbutton'>Share</button>
      </form>
      {message && <p>{message}</p>}
      <Link className="button button-outline" to="/thoughts">See Community Posts</Link>
    </div>
   
    <Footer/>
    </>
  );
}

export default ThoughtSubmission;
