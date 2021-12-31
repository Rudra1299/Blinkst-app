import { Grid, Paper } from "@mui/material";
import React from "react";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import BalconyIcon from "@mui/icons-material/Balcony";
import PublicIcon from "@mui/icons-material/Public";
import PsychologyIcon from "@mui/icons-material/Psychology";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import { Link } from "react-router-dom";

const gridStyle = {
  "&:hover": {
    color: "#116be9",
  },
};

function ExploreDropDown(props: any) {
  return (
    <Paper
      sx={{
        bgcolor: "#f1f6f4",
        color: "#000000",
        padding: "10px",
      }}
    >
      <Grid container spacing={4}>
        <Grid item alignItems="center" sx={gridStyle}>
          <RocketLaunchIcon />
          <Link
            to="/book/enterpreneurship"
            style={{ textDecoration: "none", color: "#000000" }}
          >
            enterpreneurship
          </Link>
        </Grid>
        <Grid item sx={gridStyle}>
          <BalconyIcon />
          Politics
        </Grid>
        <Grid item sx={gridStyle}>
          <PublicIcon />
          Economics
        </Grid>
        <Grid item sx={gridStyle}>
          <PsychologyIcon />
          Psycology
        </Grid>
        <Grid item sx={gridStyle}>
          <HourglassBottomIcon />
          Productivity
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ExploreDropDown;
