import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

function LoginButton(props) {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    !isAuthenticated && (
      <Button
        sx={{
          color: "#000000",
          textTransform: "none",
          "&hover": {
            border: "1px",
            borderBottomColor: "#2ce080",
          },
        }}
        variant="text"
        onClick={loginWithRedirect}
      >
        Log in
      </Button>
    )
  );
}

export default LoginButton;
