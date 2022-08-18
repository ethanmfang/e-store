import { React, useState, useEffect, useRef } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { Modal } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

import "./Products.css";

export default function Products({ products }) {
  const openItemModal = () => {
    console.log("clicked");
  };

  return (
    <div className="productContainer">
      {products.map((item) => {
        return (
          <Card
            className="Card"
            sx={{ width: 350 }}
            key={item.id}
            onClick={openItemModal}
          >
            <CardHeader
              avatar={<Avatar alt="product-icon" src={item.image} />}
              action={
                <IconButton aria-label="settings">
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
  );
}
