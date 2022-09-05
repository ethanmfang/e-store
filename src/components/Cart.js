import Typography from "@mui/material/Typography";
import React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { Button, Card, CardHeader, Icon, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

export default function Cart({ cart, setCart }) {
  const cartTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((cartItem) => {
      totalPrice += cartItem.price;
    });
    return totalPrice;
  };

  const runCheckout = () => {
    alert("This feature is in development!");
  };

  const removeCartItem = (itemToRemove) => {
    cart.splice(itemToRemove, 1);
    setCart([...cart]);
  };
  return (
    <Box className="cart" data-test="cart">
      <Card className="cartHeader" sx={{ mb: 1 }}>
        <Typography m={2} fontWeight={700} flexGrow="1">
          Cart Total: ${cartTotalPrice().toFixed(2)}
          <br />
          Items in cart: {cart.length}
        </Typography>
        <Button variant="contained" sx={{ m: 2 }} onClick={() => runCheckout()}>
          CHECKOUT
        </Button>
        <Button
          variant="contained"
          sx={{ m: 2, mr: 4, backgroundColor: "gray" }}
          onClick={() => setCart([])}
          data-test="clearCartButton"
        >
          CLEAR CART
        </Button>
      </Card>
      <Box className="cartItems" data-test="cartItems">
        {cart.map((item, index) => {
          return (
            <Card sx={{ borderRadius: 0 }} key={index} data-test="cartItem">
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
      {cart.length > 9 && (
        <Box className="cartFooter" data-test="scrollIndicator">
          <Icon sx={{ color: "#fff" }}>
            <KeyboardDoubleArrowDownIcon />
          </Icon>
          <Typography fontSize="small" sx={{ color: "#fff" }}>
            Scroll me!
          </Typography>
        </Box>
      )}
    </Box>
  );
}
