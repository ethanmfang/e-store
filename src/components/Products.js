import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import {
  Modal,
  Tooltip,
  Card,
  CardHeader,
  CardMedia,
  Avatar,
  Typography,
  IconButton,
} from "@mui/material";
import ProductDetails from "./ProductDetails";

export default function Products({ searchedItems, cart, setCart }) {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="productContainer" data-test="product-container">
        {searchedItems.map((item) => {
          return (
            <Card
              className="Card"
              sx={{ width: 350 }}
              key={item.id}
              data-test="product"
            >
              <CardHeader
                avatar={
                  <Avatar
                    alt="product-icon"
                    src={item.image}
                    onClick={() => handleOpen(item)}
                  />
                }
                action={
                  <Tooltip title="Add To Cart" arrow>
                    <IconButton
                      onClick={() => setCart([...cart, item])}
                      data-test="addToCart"
                    >
                      <AddIcon />
                    </IconButton>
                  </Tooltip>
                }
                title={
                  <Typography
                    className="title"
                    onClick={() => handleOpen(item)}
                    data-test="product-title"
                  >
                    {item.title}
                  </Typography>
                }
                subheader={
                  <Typography
                    className="price"
                    onClick={() => handleOpen(item)}
                  >
                    ${item.price}
                  </Typography>
                }
              ></CardHeader>
              <CardMedia
                component="img"
                image={item.image}
                onClick={() => handleOpen(item)}
                data-test="product-image"
              />
            </Card>
          );
        })}
      </div>
      <Modal open={open} onClose={handleClose}>
        <>
          <ProductDetails
            item={selectedItem}
            setCart={setCart}
            cart={cart}
            handleClose={handleClose}
          />
        </>
      </Modal>
    </>
  );
}
