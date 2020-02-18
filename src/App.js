import React, { Component } from "react";
import classes from "./App.module.css";
import Header from "./Header/Header";
import Library from "./Library/Library";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books: [
        {
          id: 0,
          title: "The Hobbit",
          author: "J.R.R. Tolkien",
          pages: 295,
          read: "Not Read Yet"
        },
        {
          id: 1,
          title: "The 48 Laws of Power",
          author: "Robert Greene",
          pages: 480,
          read: "Not Read Yet"
        },
        {
          id: 2,
          title: "The Prince",
          author: "Niccolo Machiavelli",
          pages: 112,
          read: "Not Read Yet"
        },
        {
          id: 3,
          title: "Tides of War",
          author: "Steven Pressfield",
          pages: 448,
          read: "Not Read Yet"
        }
      ]
    };
  }

  addNewBookHandler = event => {
    event.preventDefault();
    const books = [...this.state.books];
    const nextBookId = books.length !== 0 ? books[books.length - 1].id + 1 : 0;

    books.push({
      id: nextBookId,
      title: event.target[0].value,
      author: event.target[1].value,
      pages: event.target[2].valueAsNumber,
      read: event.target[3].value
    });

    this.setState({ books: books });
  };

  changeReadStatusHandler = booksId => {
    const bookIndex = this.state.books.findIndex(b => {
      return b.id === booksId;
    });

    const book = Object.assign({}, this.state.books[bookIndex]);

    book.read = book.read === "Read" ? "Not Read Yet" : "Read";

    const books = this.state.books.slice();

    books[bookIndex] = book;

    this.setState({ books: books });
  };

  removeBookHandler = booksId => {
    const books = this.state.books.slice();
    books.splice(booksId, 1);
    this.setState({ books: books });
  };

  render() {
    return (
      <div className={classes.App}>
        <Header addNewBook={this.addNewBookHandler.bind(this)} />
        <Library
          books={this.state.books}
          removeBookHandler={this.removeBookHandler.bind(this)}
          changeReadStatusHandler={this.changeReadStatusHandler.bind(this)}
        />
      </div>
    );
  }
}

export default App;
