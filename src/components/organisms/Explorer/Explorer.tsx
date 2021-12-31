import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import MyLibraryDescriptionBox from "../../molecules/DescriptionBox/MyLibraryDescriptionBox";
import SearchBar from "../SearchBar/SearchBar";
import { Grid } from "@mui/material";
import BookCard from "../../molecules/BookCard/BookCard";

type book = {
  id: number;
  title: String;
  author: String;
  time: String;
  category: String;
  image: String;
  count: String;
  status: "explore" | "current" | "finished";
};
function Explorer() {
  const [bookArray, setBookArray] = useState<book[]>([]);
  const [buttonClicked, setButtonClicked] = useState<Number>(0);
  const api = axios.create({
    baseURL: "http://localhost:3501/books",
  });

  async function fetchData() {
    const response = await api.get("http://localhost:3605/books");
    console.log(response.data);
    setBookArray([...response.data]);
  }

  async function patchData(id: Number, val: String) {
    await api.patch(`http://localhost:3605/books/${id}`, {
      status: val,
    });
  }
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buttonClicked]);

  const ButtonClickHandler = (id: number, val: String) => {
    patchData(id, "current");
    setButtonClicked(id);
  };

  return (
    <>
      <MyLibraryDescriptionBox />
      <br />
      <SearchBar bookArray={bookArray} />
      <Grid container spacing={4} sx={{ width: "1000px" }}>
        {bookArray
          .filter((book) => {
            return book.status === `explore`;
          })
          .map((UserBook) => {
            return (
              <Grid item key={UserBook.id}>
                <BookCard
                  key={UserBook.id}
                  buttonText={"+ Add to Library"}
                  book={UserBook}
                  onClick={() =>
                    ButtonClickHandler(UserBook.id, UserBook.status)
                  }
                />
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}

export default Explorer;
