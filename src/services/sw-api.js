const SWAPI_BASE_URL = 'https://swapi.dev/api/';

export const getAllStarships = async () => {
  try {
    const response = await fetch(`${SWAPI_BASE_URL}starships/`);
    const data = await response.json();
    return data.results;  
  } catch (error) {
    console.error('Error fetching starships:', error);
  }
};