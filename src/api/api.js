import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/posts`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
