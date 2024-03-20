import React, { useState } from 'react';
import axios from 'axios'

function CreateTournament() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/tournaments', { name, date });
      console.log(response.data);
    } catch (error) {
      console.error("Error creating tournament: ", error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Tournament Name" value={name} onChange={e => setName(e.target.value)} />
      <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      <button type="submit">Create Tournament</button>
    </form>
  );
}

export default CreateTournament;