import React, { useState, useEffect, useRef } from "react";
import NavBar from "./components/NavBar";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { Modal } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "./App.css";

const getSearchedItems = (keyword, products) => {
  const search = keyword.toLowerCase();
  if (!keyword) {
    return products;
  }
  return products.filter(
    (product) =>
      product.title.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search)
  );
};

function App() {
  const [cart, setCart] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState([]);
  //const [item, setItem] = useState([]);
  //const [open, setOpen] = useState(false);

  // const closeItemModal = () => setOpen(false);
  // const openItemModal = () => setOpen(true);

  // const openItemModal = () => {
  //   console.log("clicked");
  // };

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  const searchedItems = getSearchedItems(keyword, products);

  // const addCartCount = (cartCount, item) => {
  //   setCartCount(cartCount + 1);
  //   console.log([cartCount]);
  // };

  return (
    <>
      <NavBar cart={cart} />
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
        />
        <IconButton className="SearchButton" size="large">
          <SearchIcon />
        </IconButton>
      </Box>

      <div className="productContainer">
        {searchedItems.map((item) => {
          return (
            <Card
              className="Card"
              sx={{ width: 350 }}
              key={item.id}
              //onClick={openItemModal}
            >
              <CardHeader
                avatar={<Avatar alt="product-icon" src={item.image} />}
                action={
                  <IconButton onClick={() => setCart([...cart, item])}>
                    <AddIcon />
                  </IconButton>
                }
                title={<Typography className="title">{item.title}</Typography>}
                subheader={
                  <Typography className="price">${item.price}</Typography>
                }
              ></CardHeader>
              <CardMedia component="img" image={item.image} />
            </Card>
          );
        })}
      </div>
      {/* <Modal open={open} onClose={closeItemModal}>
        <Card>
          <CardHeader
            title={<Typography className="title">{item.title}</Typography>}
          ></CardHeader>
        </Card>
      </Modal> */}
    </>
  );
}

export default App;
