import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

function LoginButton(props) {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    !isAuthenticated && (
      <Button
        sx={{ backgroundColor: "#2ce080" }}
        variant="contained"
        onClick={loginWithRedirect}
      >
        Log in
      </Button>
    )
  );
}

export default LoginButton;
