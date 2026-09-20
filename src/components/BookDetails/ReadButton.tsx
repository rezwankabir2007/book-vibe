
"use client";

import React, { useContext } from "react";
import { BookContext } from "../BooksContext";
import { IBook } from "@/types/booksType";
import { Bounce, toast } from "react-toastify";

const ReadButton = ({ book }: { book: IBook }) => {
  const bookContext = useContext(BookContext);

  if (!bookContext) {
    throw new Error("ReadButton must be used within a BookContext provider");
  }

  const { readBooks, setReadBooks } = bookContext;

  const handleReadBook = () => {
    console.log("read book button trigger");

    setReadBooks([...readBooks, book]);
    
    toast.success(`You have read "${book.bookName}`, {
position: "top-center",
autoClose: 3000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
  };

  return (
    <button
      className="btn btn-primary"
      onClick={handleReadBook}
    >
      📖 Read
    </button>
  );
};

export default ReadButton;
