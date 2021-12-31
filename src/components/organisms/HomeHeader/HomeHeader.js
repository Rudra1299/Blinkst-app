import { Grid } from "@mui/material";
import Header from "../Header/Header";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
function HomeHeader() {
  return (
    <>
      <Grid container justifyContent="space-around">
        <Grid items xs={8} md={8}>
          <Header />
        </Grid>
        <Grid items xs={8} md={4}>
          <LogoutButton />
          <LoginButton />
        </Grid>
      </Grid>
    </>
  );
}

export default HomeHeader;
