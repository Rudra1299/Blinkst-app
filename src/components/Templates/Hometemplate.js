import { Container } from "@mui/material";
import React from "react";
import { Grid } from "@mui/material";

function template(props) {
  return (
    <Container maxwidth="1g">
      <Grid item container xs alignContent="flex-start" spacing={2}>
        <Grid item xs={12}>
          {props.banner}
        </Grid>
        <Grid item xs={12}>
          {props.content}
        </Grid>
      </Grid>
    </Container>
  );
}

export default template;
