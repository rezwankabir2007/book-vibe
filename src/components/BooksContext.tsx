"use client";

import React, { createContext, useState } from "react";
import { IBook } from "@/types/booksType";

type BookContextType = {
  readBooks: IBook[];
  setReadBooks: React.Dispatch<React.SetStateAction<IBook[]>>;
  wishlist: IBook[];
  setWishlist: React.Dispatch<React.SetStateAction<IBook[]>>;
};

export const BookContext = createContext<BookContextType | undefined>(
  undefined
);

const BooksProvider = ({ children }: { children: React.ReactNode }) => {
  const [readBooks, setReadBooks] = useState<IBook[]>([]);
  const [wishlist, setWishlist] = useState<IBook[]>([]);

  return (
    <BookContext.Provider
      value={{
        readBooks,
        setReadBooks,
        wishlist,
        setWishlist,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BooksProvider;