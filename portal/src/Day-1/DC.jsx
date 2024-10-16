import React, { useState, useEffect } from 'react';

function FormAndTable() {
  const [formData, setFormData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formValues = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };
    setFormData([...formData, formValues]);
    event.target.reset();
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newData = [
        { name: 'John Doe', email: 'john@example.com', message: 'Hello!' },
      ];
      setFormData((prevData) => [...prevData, ...newData]);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const styles = {
    container: {
      maxWidth: '800px',
      margin: 'auto',
      padding: '20px',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    },
    header: {
      textAlign: 'center',
      color: '#333',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      marginTop: '10px',
    },
    input: {
      padding: '10px',
      marginTop: '5px',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    textarea: {
      padding: '10px',
      marginTop: '5px',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    button: {
      marginTop: '15px',
      padding: '10px',
      borderRadius: '4px',
      border: 'none',
      backgroundColor: '#5cb85c',
      color: 'white',
      fontSize: 'larger',
    },
    dataTable: {
      width: '100%',
      borderCollapse: 'collapse',
    },
    thTdStyle: {
      padding: '10px',
      textAlign: 'left',
      borderBottom: '1px solid #ddd',
    },
    thStyle: {
      backgroundColor: '#f2f2f2',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Contact Form</h2>
      
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>Name:</label>
        <input type="text" name="name" required style={styles.input} />
        
        <label style={styles.label}>Email:</label>
        <input type="email" name="email" required style={styles.input} />
        
        <label style={styles.label}>Message:</label>
        <textarea name="message" required style={styles.textarea} />
        
        <button type="submit" style={styles.button}>Submit</button>
      </form>

      <h2 style={styles.header}>Submitted Data</h2>

      <table style={styles.dataTable}>
        <thead>
          <tr>
            <th style={{ ...styles.thTdStyle, ...styles.thStyle }}>Name</th>
            <th style={styles.thTdStyle}>Email</th>
            <th style={styles.thTdStyle}>Message</th>
          </tr>
        </thead>
        <tbody>
          {formData.map((item, index) => (
            <tr key={index}>
              <td style={styles.thTdStyle}>{item.name}</td>
              <td style={styles.thTdStyle}>{item.email}</td>
              <td style={styles.thTdStyle}>{item.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FormAndTable;
