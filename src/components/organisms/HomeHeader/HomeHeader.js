import { Grid } from "@mui/material";
import Header from "../Header/Header";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
function HomeHeader() {
  return (
    <>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid items xs={8} md={8}>
          <Header />
        </Grid>
        <Grid items container xs={8} md={4} justifyContent="center">
          <Grid items>
            <LogoutButton />
          </Grid>
          <Grid items>
            <LoginButton />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default HomeHeader;
