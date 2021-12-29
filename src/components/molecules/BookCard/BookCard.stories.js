import React from "react";
import BookCard from "./BookCard";

export default {
  title: "Molecules/BookCard",
  component: BookCard,
};

const Template = (args) => <BookCard {...args} />;

export const BookCardCurrentlyReading = Template.bind({});
BookCardCurrentlyReading.args = {
  book: {
    title: "Book card 1",
    author: "Book Author",
    image:
      "https://images.blinkist.io/images/books/619e31766cee07000894556e/1_1/470.jpg",
    imageTitle: "Book 1",
    time: "13 min read",
    count: "15k read",
  },
  buttonText: "Currently Reading",
};

export const BookCardFinished = Template.bind({});
BookCardFinished.args = {
  ...BookCardCurrentlyReading.args,
  buttonText: "Finished",
};
