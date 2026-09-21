import ReadButton from "@/components/BookDetails/ReadButton";
import WishListButton from "@/components/BookDetails/WishListButton";
import Image from "next/image";

interface Book {
    bookId: number;
    image: string;
    bookName: string;
    category: string;
    rating: number;
    author: string;
    tags: string[];
    review: string;
    totalPages: number;
    yearOfPublishing: number;
    publisher: string;
}

interface BookPageProps {
    params: Promise<{ id: string }>;
}

const getBooks = async (): Promise<Book[]> => {
  let response: Response;

  try {
    response = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`
    );
  } catch (error) {
    console.log("Error fetching Book data:", error);
    throw error;
  }

    if (!response.ok) {
        throw new Error("Failed to fetch books");
    }

    return response.json() as Promise<Book[]>;
};

export default async function BookPage({
    params,
}: BookPageProps) {
    // URL থেকে id নেওয়া
    const { id } = await params;

    // সব বই আনা
    const books = await getBooks();

    // URL id অনুযায়ী book খোঁজা
    const book = books.find(
        (item) => item.bookId === Number(id)
    );

    // Book না পাওয়া গেলে
    if (!book) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-red-500">
                        Book Not Found
                    </h1>

                    <p className="mt-2 text-gray-500">
                        No book found with ID: {id}
                    </p>
                </div>
            </div>
        );
    }

    return (
        <main className="container mx-auto px-4 py-10">
            <div className="mx-auto max-w-5xl">
                <div className="card card-side flex-col overflow-hidden bg-base-100 shadow-xl md:flex-row">

                    {/* Book Image */}
                    <figure className="relative h-[400px] w-full md:h-[600px] md:w-2/5">
                        <Image
                            src={book.image}
                            alt={book.bookName}
                            fill
                            className="object-cover"
                        />
                    </figure>

                    {/* Book Information */}
                    <div className="card-body w-full md:w-3/5">

                        {/* Category + Rating */}
                        <div className="flex items-center justify-between gap-3">
                            <span className="badge badge-primary">
                                {book.category}
                            </span>

                            <span className="badge badge-warning gap-1">
                                ⭐ {book.rating}/5
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="card-title mt-3 text-3xl font-bold">
                            {book.bookName}
                        </h1>

                        {/* Author */}
                        <p className="text-base text-gray-500">
                            By{" "}
                            <span className="font-semibold text-gray-800">
                                {book.author}
                            </span>
                        </p>

                        {/* Tags */}
                        <div className="mt-3 flex flex-wrap gap-2">
                            {book.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="badge badge-outline"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        {/* Review */}
                        <div className="mt-4">
                            <h3 className="mb-2 text-lg font-semibold">
                                About this book
                            </h3>

                            <p className="text-sm leading-6 text-gray-600">
                                {book.review}
                            </p>
                        </div>

                        {/* Book Information */}
                        <div className="mt-5 grid grid-cols-2 gap-4 rounded-xl bg-base-200 p-4">

                            <div>
                                <p className="text-xs text-gray-500">
                                    Total Pages
                                </p>
                                <p className="font-semibold">
                                    {book.totalPages}
                                </p>
                            </div>

                            <div>
                                <p className="text-xs text-gray-500">
                                    Published
                                </p>
                                <p className="font-semibold">
                                    {book.yearOfPublishing}
                                </p>
                            </div>

                            <div>
                                <p className="text-xs text-gray-500">
                                    Publisher
                                </p>
                                <p className="font-semibold">
                                    {book.publisher}
                                </p>
                            </div>

                            <div>
                                <p className="text-xs text-gray-500">
                                    Rating
                                </p>
                                <p className="font-semibold">
                                    ⭐ {book.rating}
                                </p>
                            </div>

                        </div>

                        {/* Button */}
                        <div className= "grid grid-cols-2 card-actions mt-5 w-[300px]">
                           
                            <ReadButton book={book} />

                           
                            {/* <button className="btn btn-primary w-full">
                                📖 WishList
                            </button> */}

                                <WishListButton book={book}/>

                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}