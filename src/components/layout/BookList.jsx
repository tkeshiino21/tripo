import React from "react";

const BookList = () => {
  const bookData = {
    title: "Hello",
    author: "HelloMan",
    date: "today",
    note: "what a good book!",
  };

  return (
    <div>
      <li>{bookData.title}</li>
      <li>{bookData.author}</li>
      <li>{bookData.date}</li>
      <li>{bookData.note}</li>
    </div>
  );
};

export default BookList;
