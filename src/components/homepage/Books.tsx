import React from "react";
import BookCard from "../shared/BookCard";
import { IBook } from "@/types/booksType";

const getBooks = async (): Promise<IBook[]> => {
  const response = await fetch(
    "http://localhost:3000/booksData.json"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch books data");
  }

  const data = await response.json();

  return data;
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto my-20 px-4">
      <h2 className="mb-1 text-center text-3xl font-bold">
        Explore All Books
      </h2>

      <p className="mb-10 text-center text-xl font-bold">
        Learn it and Achieve Knowledge
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {booksData.slice(0, 9).map((book) => (
          <BookCard
            key={book.bookId}
            book={book}
          />
        ))}
      </div>
    </section>
  );
};

export default Books;