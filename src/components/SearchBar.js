import React, { useRef } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import "./SearchBar.css";

export default function SearchBar({ products, setProducts }) {
  const searchRef = useRef();

  const searchProducts = () => {
    const search = searchRef.current.value.toLowerCase();
    const result = products.filter(
      (product) =>
        search === "" ||
        product.title.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search)
    );
    console.log(result);
  };

  return (
    <Box
      className="SearchBar"
      component="form"
      noValidate
      autoComplete="off"
      sx={{ mt: 2, mb: 2 }}
    >
      <TextField
        ref={searchRef}
        label="Search Products"
        variant="outlined"
        onChange={searchProducts}
      />
      <IconButton
        className="SearchButton"
        size="large"
        sx={{ outline: "black" }}
      >
        <SearchIcon />
      </IconButton>
    </Box>
  );
}
