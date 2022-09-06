import React from "react";
import {
  Card,
  CardHeader,
  IconButton,
  Typography,
  CardMedia,
  Avatar,
  CardContent,
  Button,
  CardActions,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

export default function ProductDetails({ cart, setCart, item, handleClose }) {
  return (
    <>
      <Card
        className="detailsCard"
        sx={{ width: 550, height: "fit-content", m: "auto", mt: 6 }}
        key={item.id}
        data-test="product-details"
      >
        <CardHeader
          avatar={<Avatar alt="product-icon" src={item.image} />}
          action={
            <IconButton onClick={handleClose} data-test="detailsClose">
              <ClearIcon />
            </IconButton>
          }
          title={<Typography fontWeight="700">{item.title}</Typography>}
        ></CardHeader>
        <CardMedia
          component="img"
          image={item.image}
          sx={{ width: "auto", maxHeight: "350px", margin: "auto" }}
        />
        <CardContent>
          <Typography>{item.description}</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "space-between" }}>
          <Typography
            className="detailsPrice"
            sx={{ m: 2 }}
            fontSize="25px"
            fontWeight="700"
          >
            ${item.price}
          </Typography>
          <Button
            variant="contained"
            sx={{ m: 2 }}
            onClick={() => setCart([...cart, item])}
            data-test="addToCart-details"
          >
            ADD TO CART
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
