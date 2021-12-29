import React from "react";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material";

function ButtonComponent(props) {
  return (
    <>
      <ThemeProvider theme={props.theme}>
        <Button {...props}>{props.children}</Button>
      </ThemeProvider>
    </>
  );
}

export default ButtonComponent;
