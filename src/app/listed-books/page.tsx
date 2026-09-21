"use client";

import React, { useContext, useState } from "react";

import { BookContext } from "@/components/BooksContext";
import { IBook } from "@/types/booksType";
import ListedBooksCard from "@/components/shared/ListedBooksCard";

const ListBook = () => {
  const context = useContext(BookContext);

  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");

  const sortBooks = (books: IBook[]) => {
    const sortedBooks = [...books];

    if (sortBy === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortBy === "year") {
      sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }

    return sortedBooks;
  };

  if (!context) {
    return null;
  }

  const { readBooks, wishlist } = context;
  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishlist = sortBooks(wishlist);

  return (
    <div className="container mx-auto max-w-4xl px-4 py-20">
      {/* Header */}
      <div className="mb-8">
        <h2 className="rounded-2xl bg-amber-500 px-6 py-8 text-center text-3xl font-bold text-white shadow-lg md:text-4xl">
          📚 Listed Books
        </h2>
      </div>

      {/* Dropdown Selector */}
      <div className="my-4 text-center">
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value as "rating" | "pages" | "year")
          }
          className="select select-success"
        >
          <option disabled>Sort by</option>
          <option value="rating">Rating</option>
          <option value="pages">Number of Pages</option>
          <option value="year">Published Year</option>
        </select>
      </div>

      {/* Tabs */}
      <div className="tabs tabs-border w-full">
        {/* ================= Read Books ================= */}
        <input
          type="radio"
          name="book_tabs"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
          defaultChecked
        />

        <div className="tab-content w-full pt-6">
          <div className="flex flex-col gap-5">
            {sortedReadBooks.length > 0 ? (
              sortedReadBooks.map((book: IBook) => (
                <ListedBooksCard
                  key={book.bookId}
                  book={{ ...book, review: String(book.rating) }}
                />
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 py-16 text-center">
                <p className="text-5xl">📚</p>
                <p className="mt-4 text-lg font-semibold text-gray-700">
                  No read books found
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Start reading books and they will appear here.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* ================= Wishlist ================= */}
        <input
          type="radio"
          name="book_tabs"
          className="tab"
          aria-label={`Wishlist (${wishlist.length})`}
        />

        <div className="tab-content w-full pt-6">
          <div className="flex flex-col gap-5">
            {sortedWishlist.length > 0 ? (
              sortedWishlist.map((book: IBook) => (
                <ListedBooksCard
                  key={book.bookId}
                  book={{ ...book, review: String(book.rating) }}
                />
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 py-16 text-center">
                <p className="text-5xl">♡</p>
                <p className="mt-4 text-lg font-semibold text-gray-700">
                  No wishlist books found
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Add your favorite books to your wishlist.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListBook;