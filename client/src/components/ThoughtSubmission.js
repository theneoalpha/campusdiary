import React, { useState } from 'react';
import "../components/assets/thoughts.css";
import Navbar from "./Navbar.js";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function ThoughtSubmission() {
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');
 

  const handleSubmit = async (e) => {
    e.preventDefault();

    

    try {
      const res = await fetch("/thought", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
         content
        }),
      });

      const data = await res.json();

      if (res.status === 422 || !data) {
        window.alert("Invalid Message");
        console.log("Invalid Message");
      } else {
        window.alert("Succesfully Posted in Community");
        
        console.log("Succesfully Posted in Community");
      }
    } catch (error) {
      console.log(error);
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
};

