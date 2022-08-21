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
    cart.splice(itemToRemove, 1);
    setCart([...cart]);
  };
  return (
    <Box maxHeight={800} overflow="scroll">
      <Card>
        <Typography m={2} fontWeight={700}>
          Cart Total: ${cartTotalPrice().toFixed(2)}
          <br />
          Items in cart: {cart.length}
        </Typography>
      </Card>
      {cart.map((item, index) => {
        return (
          <Card>
            <CardHeader
              avatar={<Avatar alt="product-icon" src={item.image} />}
              action={
                <IconButton onClick={() => removeCartItem(index)}>
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
