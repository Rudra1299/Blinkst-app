import { Paper, Typography } from "@mui/material";
import React from "react";
function PaperComponent(props) {
  const { title, description } = props;
  return (
    <>
      <Paper>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
    </>
  );
}

export default PaperComponent;
