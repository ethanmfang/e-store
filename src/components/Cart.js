import Typography from "@mui/material/Typography";
import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { Card, CardHeader, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

export default function Cart({ cart, setCart }) {
  const cartTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((cartItem) => {
      totalPrice += cartItem.price;
    });
    return totalPrice;
  };
  const removeCartItem = (itemToRemove) => {
    setCart(cart.filter((cartItems) => cartItems !== itemToRemove));
  };
  return (
    <Box>
      <Card>
        <Typography m={2} fontWeight={700}>
          Cart Total: ${cartTotalPrice().toFixed(2)}
          <br />
          Items in cart: {cart.length}
        </Typography>
      </Card>
      {cart.map((item) => {
        return (
          <Card>
            <CardHeader
              avatar={<Avatar alt="product-icon" src={item.image} />}
              action={
                // onClick remove this item from array
                <IconButton onClick={() => removeCartItem(item)}>
                  <ClearIcon />
                </IconButton>
              }
              title={
                <Typography className="cartTitle">{item.title}</Typography>
              }
              subheader={
                <Typography className="price">${item.price}</Typography>
              }
            ></CardHeader>
          </Card>
        );
      })}
    </Box>
  );
}
