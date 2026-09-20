

import { IBook } from "@/types/booksType";
import BookCard from "@/components/shared/BookCard";

const getBooks = async (): Promise<IBook[]> => {
  const response = await fetch("http://localhost:3000/booksData.json");

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
        <p className="text-black text-center text-2xl">OUR COLLECTION</p>
      <h2 className="text-3xl font-bold text-center mb-1">
        Explore All Books
      
      </h2 >
      <p className=" font-bold text-center mb-10">Discover amazing stories,Timeless classies,and inspining books from talented authors</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {booksData.map((book, ind) => {
          return <BookCard key={ind} book={book} />;
         
        })}
      </div>
    </section>
  );
};

export default Books;

