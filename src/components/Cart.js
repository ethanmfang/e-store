import { Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/material";

export default function Cart({ cart }) {
  return (
    <Box>
      {cart.map((item) => {
        <Typography>{item.title}</Typography>;
      })}
    </Box>
  );
}
