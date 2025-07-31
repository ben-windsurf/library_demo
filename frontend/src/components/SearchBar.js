import React from 'react';
import { Paper, InputBase, IconButton } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const SearchBar = ({ onSearch }) => {
  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', maxWidth: 600, margin: '20px auto' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search for books..."
        inputProps={{ 'aria-label': 'search books' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
