import React from 'react';
import axios from 'axios';

function TestComp() {
  const handleClick = () => {
    axios.post('http://localhost:8000/api/test')
      .then(response => {
        console.log('Test Document Created: ', response.data);
      })
      .catch(error => {
        console.error("Error in creating Test Document: ", error);
      });
  };

  return (
    <button onClick={handleClick}>Create Test Document</button>
  );
}

export default TestComp;