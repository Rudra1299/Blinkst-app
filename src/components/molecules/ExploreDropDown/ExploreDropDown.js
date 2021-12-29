import { Grid, Paper } from "@mui/material";
import React from "react";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import BalconyIcon from "@mui/icons-material/Balcony";
import PublicIcon from "@mui/icons-material/Public";
import PsychologyIcon from "@mui/icons-material/Psychology";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import { Link } from "react-router-dom";

function ExploreDropDown(props) {
  return (
    <Paper
      sx={{
        bgcolor: "#f1f6f4",
        color: "#000000",
      }}
    >
      <Grid container spacing={4}>
        <Grid item alignItems="center">
          <RocketLaunchIcon />
          <Link
            to=""
            href="/book/enterpreneurship"
            style={{ textDecoration: "none", color: "#000000" }}
          >
            enterpreneurship
          </Link>
        </Grid>
        <Grid item>
          <BalconyIcon />
          Politics
        </Grid>
        <Grid item>
          <PublicIcon />
          Economics
        </Grid>
        <Grid item>
          <PsychologyIcon />
          Psycology
        </Grid>
        <Grid item>
          <HourglassBottomIcon />
          Productivity
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ExploreDropDown;
