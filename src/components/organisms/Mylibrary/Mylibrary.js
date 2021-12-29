import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import MyLibraryDescriptionBox from "../../molecules/DescriptionBox/MyLibraryDescriptionBox";
import BookCard from "../../molecules/BookCard/BookCard";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function Mylibrary() {
  const [bookArray, setBookArray] = useState([]);
  const [pageStatus, setPageStatus] = useState("finished");
  const [activeLink, setActiveLink] = useState("fin");
  const [buttonClicked, setButtonClicked] = useState(0);

  const activeStyle = {
    color: "#22C870",
    borderColor: "#22C870",
    borderBottom: "2px solid",
    width: "300px",
    textTransform: "none",
    textAlign: "left",
  };

  const deactiveStyle = {
    color: "#BAC8CE",
    borderColor: "#BAC8CE",
    width: "300px",
    textTransform: "none",
    borderBottom: "2px solid",
    textAlign: "left",
  };

  const api = axios.create({
    BaseURL: "http://localhost:3501/books",
  });

  async function fetchData() {
    const response = await api.get("http://localhost:3605/books");
    console.log(response.data);
    setBookArray([...response.data]);
  }

  async function patchData(id, val) {
    await api.patch(`http://localhost:3605/books/${id}`, {
      status: val,
    });
  }
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buttonClicked]);

  const ClickTabHandler = (e, value) => {
    setActiveLink(value);
    value === "crr" ? setPageStatus("current") : setPageStatus("finished");
  };

  const ButtonClickHandler = (id, val) => {
    const currentStatus = val === "current" ? "finished" : "current";
    patchData(id, currentStatus);
    setButtonClicked(id);
  };

  return (
    <>
      <Grid container justifyContent="flexstart">
        <Grid item xs={12}>
          <Typography variant="h4" align="left">
            My Library
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <MyLibraryDescriptionBox />
        </Grid>
      </Grid>
      <br />
      <Grid container spacing={0}>
        <Grid item xs={12} md={8}>
          <Box sx={{ width: "100%" }}>
            <Tab
              value="crr"
              label="Currently reading"
              sx={activeLink === "crr" ? activeStyle : deactiveStyle}
              disableRipple
              onChange={ClickTabHandler}
            />
            <Tab
              value="fin"
              label="Finished"
              sx={activeLink === "fin" ? activeStyle : deactiveStyle}
              disableRipple
              onChange={ClickTabHandler}
            />
          </Box>
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container spacing={4} sx={{ width: "1000px" }}>
        {bookArray
          .filter((book) => {
            return book.status === `${pageStatus}`;
          })
          .map((UserBook) => {
            return (
              <Grid item key={UserBook.id}>
                <BookCard
                  key={UserBook.id}
                  buttonText={
                    UserBook.status === "finished"
                      ? "Read Again"
                      : "finish read"
                  }
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

export default Mylibrary;
