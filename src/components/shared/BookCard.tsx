import { IBook } from '@/types/booksType';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


interface IBookCardProps {

    book:IBook;


}

const BookCard = ({book}:IBookCardProps) => {
    return (
          <div
            
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
          >
            <Image
              src={book.image}
              alt={book.bookName}
              width={800}
              height={600}
              className="w-full h-64 object-cover"
            />

            <div className="p-4 flex flex-col flex-1">
              <h3 className="text-lg font-semibold line-clamp-2">
                {book.bookName}
              </h3>

              <p className="text-sm text-gray-500 mb-2">
                by {book.author}
              </p>

          <Link href={`/books/${book.bookId}`}>
              <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors">
                Read More
              </button>
            </Link>

            </div>
          </div>
    );
};

export default BookCard;