import { IBook } from "@/types/booksType";
import BookCard from "@/components/shared/BookCard";
import fs from "fs/promises";
import path from "path";

const getBooks = async (): Promise<IBook[]> => {
  // Production / Build time-এ সরাসরি ফাইল সিস্টেম থেকে ডেটা পড়া
  if (process.env.NODE_ENV === "production" || typeof window === "undefined") {
    const filePath = path.join(process.cwd(), "public", "booksData.json");
    const jsonData = await fs.readFile(filePath, "utf-8");
    return JSON.parse(jsonData);
  }

  // Client side fallback (যদি প্রয়োজন হয়)
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL || "http://localhost:3000";
  const response = await fetch(`${baseUrl}/booksData.json`);
  if (!response.ok) throw new Error("Failed to fetch books data");
  return response.json();
};

const Books = async () => {
  const booksData = await getBooks();

  return (
    <section className="container mx-auto my-20 px-4">
      <p className="text-center text-2xl text-black">OUR COLLECTION</p>
      <h2 className="mb-1 text-center text-3xl font-bold">
        Explore All Books
      </h2>
      <p className="mb-10 text-center font-bold">
        Discover amazing stories, Timeless classics, and inspiring books from talented authors
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {booksData.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;