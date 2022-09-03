import { React, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Modal from "@mui/material/Modal";
import Cart from "./Cart";
import Badge from "@mui/material/Badge";

const NavBar = ({ cart, setCart }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="100%">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              maxWidth="fit-content"
              sx={{
                mr: 2,
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Clamazon
            </Typography>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="View Cart">
                <Badge
                  badgeContent={cart.length}
                  onClick={handleOpen}
                  sx={{ p: 0, cursor: "pointer" }}
                  data-test="cartIcon"
                >
                  <ShoppingCartIcon />
                </Badge>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Modal open={open} onClose={handleClose}>
        <Cart cart={cart} setCart={setCart} />
      </Modal>
    </>
  );
};
export default NavBar;
