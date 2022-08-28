import Typography from "@mui/material/Typography";
import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { Button, Card, CardHeader, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { style } from "@mui/system";

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
    <Box className="cart">
      <Card className="cartHeader">
        <Typography m={2} fontWeight={700}>
          Cart Total: ${cartTotalPrice().toFixed(2)}
          <br />
          Items in cart: {cart.length}
        </Typography>
        <Button variant="contained" sx={{ m: 2 }}>
          CHECKOUT
        </Button>
      </Card>
      <Box className="cartItems">
        {cart.map((item, index) => {
          return (
            <Card className="cartItem" sx={{ borderRadius: 0 }}>
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
                  <Typography className="cartPrice">${item.price}</Typography>
                }
              ></CardHeader>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
}
