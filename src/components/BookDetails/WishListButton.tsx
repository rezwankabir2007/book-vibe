"use client";

import React, { useContext } from "react";
import { BookContext } from "../BooksContext";
import { IBook } from "@/types/booksType";
import { Bounce, toast } from "react-toastify";

const WishListButton = ({ book }: { book: IBook }) => {
  const { wishlist, setWishlist } = useContext(BookContext)!;

  const handleAddToWishlist = () => {
    setWishlist([...wishlist, book]);

    toast.success(`You wish read "${book.bookName}`, {
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
      onClick={handleAddToWishlist}
    >
      📖 Wishlist
    </button>
  );
};

export default WishListButton;