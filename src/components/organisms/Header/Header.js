import { Avatar, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ExplorerDropDown from "../ExplorerDropDown/ExplorerDropDown";
import image from "./Blinkist_icon.png";

const styler = {
  color: "#000000",
  marginRight: 16,
  fontSize: 16,
  textDecoration: "none",
};

function Header() {
  const [openPopup, setOpenPopup] = useState(false);
  const [clicked, setClicked] = useState(false);

  const screenClickHandler = () => {
    if (clicked) {
      setOpenPopup(!openPopup);
      setClicked(false);
    }
  };
  return (
    <div onClick={screenClickHandler}>
      <Toolbar component="nav">
        <Avatar src={image} />
        <Typography style={{ marginRight: 16 }}>
          <b>Blinkist</b>
        </Typography>

        <Link
          to="#"
          onClick={() => {
            setOpenPopup(true);
            setClicked(true);
          }}
          style={{ ...styler, marginRight: 16 }}
        >
          Explore
        </Link>
        <Link
          to="/book/myLibrary"
          href="#"
          style={{ ...styler, marginRight: 16 }}
        >
          Mylibrary
        </Link>
        <Link
          to="#"
          key="Highlights"
          variant="body2"
          style={{ ...styler, marginRight: 16 }}
        >
          Highlights
        </Link>
        <Link
          to="#"
          key="Account"
          variant="body2"
          style={{ ...styler, marginRight: 16 }}
        >
          Account
        </Link>
      </Toolbar>
      <ExplorerDropDown openPopup={openPopup} setOpenPopup={setOpenPopup} />
    </div>
  );
}

export default Header;
