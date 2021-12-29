import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";

const cardStyle = {
  width: "286px",
  height: "466px",
  "&hover": {
    background: "#f1f6f4",
  },
};

export default function BookCard(props) {
  const { book, buttonText } = props;
  return (
    <Card sx={cardStyle}>
      <CardMedia component="img" image={book.image} alt={book.imageTitle} />
      <CardContent>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Typography gutterBottom variant="h5" component="div">
              {book.title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle" color="text.secondary">
              {book.author}
            </Typography>
          </Grid>
          <Grid item container justifyContent="space-between ">
            <Grid item>
              <Typography variant="body2" color="text.secondary">
                {book.time}
                {" min read"}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="text.secondary">
                {book.count}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions sx={{ padding: "0px" }}>
        {buttonText.length > 0 && (
          <Button
            fullWidth
            sx={{ borderRadius: "0px" }}
            variant="contained"
            color="primary"
            onClick={props.onClick}
          >
            {buttonText}
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
