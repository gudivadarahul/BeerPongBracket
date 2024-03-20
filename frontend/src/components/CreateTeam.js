import React, { useState } from 'react';
import axios from 'axios';

function CreateTeam() {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/teams', { name });
      console.log('Team created:', response.data);
      // Optionally, redirect to a new page or update state
    } catch (error) {
      console.error('Error creating team:', error);
      // Handle error (e.g., display error message)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Team Name" value={name} onChange={e => setName(e.target.value)} />
      <button type="submit">Create Team</button>
    </form>
  );
}

export default CreateTeam;