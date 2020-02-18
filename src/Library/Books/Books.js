import React from "react";
import Book from "./Book/Book";

const Books = props => {
  return props.books.map((book, index) => {
    return (
      <Book
        key={book.id}
        title={book.title}
        author={book.author}
        pages={book.pages}
        read={book.read}
        removeBookHandler={() => props.removeBookHandler(book.id)}
        changeReadStatusHandler={() => props.changeReadStatusHandler(book.id)}
      />
    );
  });
};

export default Books;
