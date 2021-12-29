import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import image from "./googleApple.png";

const cardStyle = {
  background: "#f1f6f4",
  padding: 1.5,
  paddingright: 2.5,
  display: "flex",
  alignitems: "center",
  position: "relative",
  borderRadius: "5px",
  maxwidth: 148,
  width: "912px",
  height: "160px",
};

function MyLibraryDescriptionBox() {
  return (
    <Card sx={cardStyle}>
      <CardContent>
        <Typography sx={{ color: "red" }} variant="subtitle2">
          New
        </Typography>
        <Typography variant="h6">
          Find audiobooks on the Blinkist app
        </Typography>
        <br />
        <Typography variant="paragraph" component="p">
          With Premium you'll get the whole Blinkist library for free, plus
          full-length nonfiction audiobooks at a special member price
        </Typography>
      </CardContent>
      <CardMedia>
        <img
          src={image}
          alt="google play store"
          maxwidth="2px"
          height={120}
        ></img>
      </CardMedia>
    </Card>
  );
}

export default MyLibraryDescriptionBox;
