import Image from "next/image";
import React from "react";

type IListedBooksCardProps = {
  bookId: string | number;
  image: string;
  bookName: string;
  author: string;
  review: string;
  category: string;
  tags: string[];
  rating: number;
  totalPages: number;
  yearOfPublishing: number;
  publisher: string;
};

const ListedBooksCard = ({
  book,
}: {
  book: IListedBooksCardProps;
}) => {
  return (
 <div className="group flex min-h-[300px] w-full flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:flex-row">

  {/* Image */}
  <div className="flex justify-center sm:w-44 sm:shrink-0">
    <Image
      src={book.image}
      alt={book.bookName}
      width={160}
      height={230}
      unoptimized
      className="h-60 w-40 rounded-xl object-cover shadow-md transition-transform duration-300 group-hover:scale-105"
    />
  </div>

  {/* Content */}
  <div className="flex min-h-[250px] flex-1 flex-col justify-between">

    <div>

      {/* Title + Status */}
      <div className="mb-3 flex items-start justify-between gap-4">
        <h3 className="text-2xl font-bold text-gray-800">
          {book.bookName}
        </h3>

        <span className="shrink-0 rounded-full bg-green-100 px-4 py-1.5 text-xs font-semibold text-green-700">
          ✓ Read
        </span>
      </div>

      {/* Author */}
      <p className="mb-4 text-sm font-medium text-gray-500">
        By {book.author}
      </p>

      {/* Category + Tags */}
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
          {book.category}
        </span>

        {book.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Review */}
      <p className="line-clamp-3 text-sm leading-7 text-gray-600">
        {book.review}
      </p>

      {/* Book Information */}
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">

        <div className="rounded-xl bg-yellow-50 p-3">
          <p className="text-xs text-gray-500">
            Rating
          </p>
          <p className="mt-1 font-bold text-yellow-600">
            ⭐ {book.rating}
          </p>
        </div>

        <div className="rounded-xl bg-blue-50 p-3">
          <p className="text-xs text-gray-500">
            Pages
          </p>
          <p className="mt-1 font-bold text-blue-600">
            {book.totalPages}
          </p>
        </div>

        <div className="rounded-xl bg-green-50 p-3">
          <p className="text-xs text-gray-500">
            Published
          </p>
          <p className="mt-1 font-bold text-green-600">
            {book.yearOfPublishing}
          </p>
        </div>

        <div className="rounded-xl bg-purple-50 p-3">
          <p className="text-xs text-gray-500">
            Publisher
          </p>
          <p className="mt-1 truncate font-bold text-purple-600">
            {book.publisher}
          </p>
        </div>

      </div>
    </div>

    {/* Bottom */}
    <div className="mt-6 flex items-center justify-between gap-4 border-t border-gray-100 pt-4">

      <span className="text-sm font-semibold text-amber-600">
        📖 Read Book
      </span>

      <button
        type="button"
        className="rounded-full bg-gray-900 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-amber-500 hover:shadow-md"
      >
        View Details
      </button>

    </div>

  </div>
</div>
  );
};

export default ListedBooksCard;