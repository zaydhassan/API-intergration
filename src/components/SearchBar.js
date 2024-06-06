import React from 'react';
import TextField from '@mui/material/TextField';

/**
 * SearchBar component allows users to input search criteria for filtering items.
 * 
 * @param {Object} props
 * @param {string} props.searchText - The current search text.
 * @param {Function} props.onSearchChange - Callback to handle changes to the search text.
 */
const SearchBar = ({ searchText, onSearchChange }) => {
  /**
   * Handles input change event by invoking the callback with new value.
   * 
   * @param {Object} event - The event object.
   */
  const handleInputChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <TextField
      fullWidth
      label="Search"
      variant="outlined"
      margin="normal"
      value={searchText}
      onChange={handleInputChange}
      placeholder="Type to search..."
    />
  );
};

export default SearchBar;
