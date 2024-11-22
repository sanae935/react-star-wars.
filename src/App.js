import React, { useState, useEffect } from 'react';
import { getAllStarships } from './services/sw-api';
import './style.css';

const StarshipCard = ({ name }) => {
  return (
    <div className="starship-card">
      <h2>{name}</h2>
    </div>
  );
};

const App = () => {
  const [starships, setStarships] = useState([]);

  
  useEffect(() => {
    const fetchStarships = async () => {
      const starshipData = await getAllStarships();
      setStarships(starshipData);
    };
    fetchStarships();
  }, []);

  return (
    <div className="app">
      <h1>Star Wars Starships</h1>
      <div className="starship-list">
        {starships.length === 0 ? (
          <p>Loading...</p>
        ) : (
          starships.map((starship, index) => (
            <StarshipCard key={index} name={starship.name} />
          ))
        )}
      </div>
    </div>
  );
};

export default App;