import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";

export default function Products({ searchedItems, cart, setCart }) {
  return (
    <div className="productContainer" data-test="product-container">
      {searchedItems.map((item) => {
        return (
          <Card className="Card" sx={{ width: 350 }} key={item.id}>
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
  );
}
