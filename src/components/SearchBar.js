import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

export default function SearchBar({ setKeyword }) {
  return (
    <Box
      className="SearchBar"
      component="form"
      noValidate
      autoComplete="off"
      sx={{ mt: 2, mb: 2 }}
    >
      <TextField
        label="Search Products"
        variant="outlined"
        onChange={(e) => setKeyword(e.target.value)}
        data-test="searchBar"
      />
      <IconButton className="SearchButton" size="large">
        <SearchIcon />
      </IconButton>
    </Box>
  );
}
