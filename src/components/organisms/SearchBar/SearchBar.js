import React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Grid, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

function SearchBar(props) {
  const books = props.books;
  const [bookMatch, setBookMatch] = useState([]);

  const searchBooks = (text) => {
    if (books) {
      const bookMatches = books.filter((book) => {
        return book.name.includes(text);
      });

      setBookMatch(bookMatches);
    }
  };

  return (
    <>
      <Grid container justifyContent="flex-start">
        <TextField
          id="input-with-icon-textfield"
          label="Search Book"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="standard"
          onChange={(e) => {
            searchBooks(e.target.value);
          }}
        />
      </Grid>
      <ul>
        {bookMatch &&
          bookMatch.map((book) => {
            return (
              <li
                key={book.id}
                style={{
                  listStyleType: "none",
                  border: "2px #22C870",
                }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#116be9",
                  }}
                  to={{ pathname: "/book/displayCard", state: book }}
                >
                  <b>{book.name}</b>
                </Link>
                {"               "}
                {book.author}
              </li>
            );
          })}
      </ul>
      <Grid container justifyContent="flex-start">
        <Typography variant="h4" gutterBottom align="left">
          Trending Blinks
        </Typography>
      </Grid>
    </>
  );
}

export default SearchBar;
