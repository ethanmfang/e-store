import { React, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Modal } from "@mui/material";
import Cart from "./Cart";

const NavBar = ({ cart }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="100%">
          <Toolbar disableGutters>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
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
                <IconButton size="large" onClick={handleOpen} sx={{ p: 0 }}>
                  <Typography>{cart.length}</Typography>
                  <ShoppingCartIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Modal open={open} onClose={handleClose}>
        <Cart cart={cart} />
      </Modal>
    </>
  );
};
export default NavBar;
