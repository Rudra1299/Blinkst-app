import React from "react";
import SearchBar from "./SearchBar";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Organisms/Search Bar",
  component: SearchBar,
};

const bookArray = [
  {
    id: 1,
    name: "Book 1",
    author: "Author 1",
  },
  {
    id: 2,
    name: "Book 2",
    author: "Author 2",
  },
];

const template = (args) => (
  <BrowserRouter>
    <SearchBar {...args} />
  </BrowserRouter>
);
export const seacrhBarBox = template.bind({});
seacrhBarBox.args = {
  books: bookArray,
};
