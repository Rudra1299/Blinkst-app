import React from "react";
import Typography from "@mui/material/Typography";

const getMappedVariant = (variant) => {
  switch (variant) {
    case "header":
      return "h4";
    case "title":
      return "subtitle1";
    case "subtitle":
      return "subtitle2";
    default:
      return "body1";
  }
};

export default function TypographyComponent(props) {
  return (
    <div>
      <Typography varaint={getMappedVariant(props.variant)}>
        {props.children}
      </Typography>
    </div>
  );
}
