import Image from "next/image";
import React from "react";

type IListedBooksCardProps = {
  bookId: string | number;
  image: string;
  bookName: string;
  author: string;
  review: string;
};

const ListedBooksCard = ({
  book,
}: {
  book: IListedBooksCardProps;
}) => {
  return (
    <div className="group flex w-full flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:flex-row">

      {/* Image */}
      <div className="flex justify-center sm:w-40 sm:shrink-0">
        <Image
          src={book.image}
          alt={book.bookName}
          width={144}
          height={208}
          unoptimized
          className="h-52 w-36 rounded-xl object-cover shadow-md transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between">

        <div>
          <div className="mb-2 flex items-start justify-between gap-3">
            <h3 className="text-xl font-bold text-gray-800">
              {book.bookName}
            </h3>

            <span className="shrink-0 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              ✓ Read
            </span>
          </div>

          <p className="mb-3 text-sm font-medium text-gray-500">
            By {book.author}
          </p>

          <p className="line-clamp-3 text-sm leading-6 text-gray-600">
            {book.review}
          </p>
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <span className="text-sm font-semibold text-amber-600">
            📖 Read Book
          </span>

          <button
            type="button"
            className="rounded-full bg-gray-900 px-5 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-amber-500"
          >
            View Details
          </button>
        </div>

      </div>
    </div>
  );
};

export default ListedBooksCard;