import { useAuth0 } from "@auth0/auth0-react";
import { Avatar, Grid, Popover, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ExploreDropDown from "../../molecules/ExploreDropDown/ExploreDropDown";
import image from "./Blinkist_icon.png";

const styler = {
  color: "#000000",
  fontSize: 16,
  textDecoration: "none",
};

const BoxStyle = {
  width: "70px",
  height: "20px",
  display: "flex",
  margin: "10px",
  justifyContent: "center",
  "&:hover": {
    borderBottom: 2,
    borderColor: "#2ce080",
  },
};

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { isAuthenticated } = useAuth0();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    isAuthenticated && (
      <Grid container>
        <Grid item xs={12}>
          <Toolbar component="nav">
            <Avatar src={image} />
            <Typography style={{ marginRight: 16 }}>
              <b>Blinkist</b>
            </Typography>
            <Box sx={BoxStyle}>
              <Link to="#" style={{ ...styler }} onClick={handleClick}>
                Explore
              </Link>
            </Box>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <ExploreDropDown />
            </Popover>
            <Box sx={BoxStyle}>
              <Link to="/book/myLibrary" href="#" style={{ ...styler }}>
                My library
              </Link>
            </Box>
            <Box sx={BoxStyle}>
              <Link
                to="#"
                key="Highlights"
                variant="body2"
                style={{ ...styler }}
              >
                Highlights
              </Link>
            </Box>
            <Box sx={BoxStyle}>
              <Link to="#" key="Account" variant="body2" style={{ ...styler }}>
                Account
              </Link>
            </Box>
          </Toolbar>
        </Grid>
      </Grid>
    )
  );
}

export default Header;
