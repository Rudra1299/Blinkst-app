import { useAuth0 } from "@auth0/auth0-react";
import React, { useState } from "react";
import Header from "../Header/Header";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
function HomeHeader() {
  return (
    <>
      <Header />
      <LogoutButton />
      <LoginButton />
    </>
  );
}

export default HomeHeader;
