import { Container } from "@mui/material";
import React from "react";
import { Grid } from "@mui/material";

function template(props) {
  return (
    <Container maxwidth="lg">
      <Grid item container xs alignContent="flex-start" spacing={5}>
        <Grid item xs={12}>
          {props.banner}
        </Grid>
        <Grid item xs={12}>
          {props.content}
        </Grid>
        <br />
        <Grid item xs={12}>
          {props.footer}
        </Grid>
      </Grid>
    </Container>
  );
}

export default template;
