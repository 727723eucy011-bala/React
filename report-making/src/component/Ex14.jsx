// import React, { useState } from 'react';
// import axios from 'axios';

// const FeedbackForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [feedback, setFeedback] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate email
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setMessage('Please enter a valid email address');
//       return;
//     }

//     // Prepare data for request body
//     const data = {
//       name,
//       email,
//       feedback,
//     };
//     useEffect(()=>{const response = axios.post('http://localhost:3001/feedback', data)
//     })

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="name">Name (required):</label>
//       <input
//         type="text"
//         id="name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         required
//       />
//       <label htmlFor="email">Email (required):</label>
//       <input
//         type="email"
//         id="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />
//       <label htmlFor="feedback">Feedback (required):</label>
//       <textarea
//         id="feedback"
//         value={feedback}
//         onChange={(e) => setFeedback(e.target.value)}
//         required
//       />
//       <button type="submit">Submit Feedback</button>
//       {message && <p>{message}</p>}
//     </form>
//   );
// };

// export default FeedbackForm;
import React, { useState } from 'react';
import axios from 'axios';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('Please enter a valid email address');
      return;
    }

    // Prepare data for request body
    const data = {
      name,
      email,
      feedback,
    };

    try {
      // Send feedback to server
      const response = await axios.post('http://localhost:3001/feedback', data);
      
      // Check response status and set success message
      if (response.status === 200) {
        setMessage('Feedback submitted successfully!');
        // Clear form fields
        setName('');
        setEmail('');
        setFeedback('');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setMessage('There was an error submitting your feedback. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name (required):</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label htmlFor="email">Email (required):</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="feedback">Feedback (required):</label>
      <textarea
        id="feedback"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        required
      />
      <button type="submit">Submit Feedback</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default FeedbackForm;
