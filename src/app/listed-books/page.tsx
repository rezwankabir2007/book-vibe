"use client";

import React, { useContext } from "react";

import { BookContext } from "@/components/BooksContext";
import { IBook } from "@/types/booksType";
import ListedBooksCard from "@/components/shared/ListedBooksCard";

const ListBook = () => {
  const context = useContext(BookContext);

  if (!context) {
    return null;
  }

  const { readBooks, wishlist } = context;

  return (
    <div className="container mx-auto max-w-4xl px-4 py-20">

      {/* Header */}
      <div className="mb-8">
        <h2 className="rounded-2xl bg-amber-500 px-6 py-8 text-center text-3xl font-bold text-white shadow-lg md:text-4xl">
          📚 Listed Books
        </h2>
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

            {readBooks.length > 0 ? (
              readBooks.map((book: IBook) => (
                <ListedBooksCard
                  key={book.bookId}
                  book={{
                    ...book,
                    review: book.review ?? "",
                  }}
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

            {wishlist.length > 0 ? (
              wishlist.map((book: IBook) => (
                <ListedBooksCard
                  key={book.bookId}
                  book={{
                    ...book,
                    review: book.review ?? "",
                  }}
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