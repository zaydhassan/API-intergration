import React, { useState, useEffect } from 'react';
import { fetchData } from './api/api'; // Assuming fetchData is a function exported by api.js

import TextField from '@mui/material/TextField';
import ListView from './components/ListView';

function App() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchData();
      setItems(data);
      setFilteredItems(data);
    };
    loadData();
  }, []);

  useEffect(() => {
    setFilteredItems(
      items.filter(item => item.title.toLowerCase().includes(searchText.toLowerCase()))
    );
  }, [searchText, items]);

  return (
    <div>
      <TextField
        label="Search Posts"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <ListView items={filteredItems} />
    </div>
  );
}

export default App;
