import Icons from "@/lib/Icons";
import LocalHandler from "@/lib/LocalHandler";
import React from "react";
import { Skeleton } from "./ui/skeleton";

export type Book = {
  title: string;
  image: any;
  editionCount: string;
};

const BookCard = (props: Book) => {
  const BOOK_COVER =
    "https://cdn.pixabay.com/photo/2013/07/13/13/34/book-161117_1280.png";
  let image = props.image;
  if (image == null) {
    image = BOOK_COVER;
  }

  const saveBook = (book: Book) => {
    // Retrieve books from localStorage
    const BOOKS = LocalHandler.getBooks();
    let booksArray: (typeof book)[] = [];

    // If there are books in localStorage, parse them to an array
    if (BOOKS) {
      booksArray = BOOKS;
    }

    // Check if the book already exists in the array
    const bookIndex = booksArray.findIndex(
      (b) => b.title === book.title && b.editionCount === book.editionCount
    );

    // If the book exists, remove it from the array
    if (bookIndex !== -1) {
      booksArray.splice(bookIndex, 1);
    } else {
      // If the book doesn't exist, add it to the array
      booksArray.push(book);
    }

    // Store the updated array back to localStorage
    LocalHandler.setBooks(booksArray);
  };

  return (
    <div className="px-7 py-7 flex flex-col bg-secondary rounded drop-shadow-md">
      <img src={image} alt={props.title} className="rounded-md mx-auto h-64" />
      <div className="flex flex-grow justify-between gap-1 my-5">
        <h1 className="text-lg font-semibold">{props.title}</h1>
        <Icons.Bookmark
          onClick={() => {
            let url = props.image;
            if (!url) {
              url = BOOK_COVER;
            }
            const book: Book = {
              title: props.title,
              image: url,
              editionCount: props.editionCount,
            };
            saveBook(book);
          }}
        />
      </div>

      <p className="flex  justify-between text-sm text-muted-foreground">
        <span>Edition Count</span>
        <span>{props.editionCount}</span>
      </p>
    </div>
  );
};
export const BookCard2 = (props: Book) => {
  const BOOK_COVER =
    "https://cdn.pixabay.com/photo/2013/07/13/13/34/book-161117_1280.png";
  let image = props.image;
  if (image == null) {
    image = BOOK_COVER;
  }

  const removeBook = (book: Book) => {
    // Retrieve books from localStorage
    const BOOKS = LocalHandler.getBooks();
    let booksArray: Book[] = BOOKS;

    // Check if the book already exists in the array
    const bookIndex = booksArray.findIndex(
      (b) => b.title === book.title && b.editionCount === book.editionCount
    );
    booksArray.splice(bookIndex, 1);
    LocalHandler.setBooks(booksArray);
  };

  return (
    <div className="px-7 py-7 flex flex-col bg-secondary rounded drop-shadow-md">
      <img src={image} alt={props.title} className="rounded-md mx-auto h-64" />
      <div className="flex flex-grow justify-between gap-1 my-5">
        <h1 className="text-lg font-semibold">{props.title}</h1>
        <Icons.Bookmark2
          onClick={() => {
            let url = props.image;
            if (!url) {
              url = BOOK_COVER;
            }
            const book: Book = {
              title: props.title,
              image: url,
              editionCount: props.editionCount,
            };

            removeBook(book);
          }}
        />
      </div>

      <p className="flex  justify-between text-sm text-muted-foreground">
        <span>Edition Count</span>
        <span>{props.editionCount}</span>
      </p>
    </div>
  );
};
export const BookSkeleton = () => {
  return (
    <div className="px-7 py-7 gap-6 flex flex-col rounded drop-shadow-md">
      <Skeleton className="w-full h-[300px] " />
      <Skeleton className="w-full h-[50px] " />
    </div>
  );
};
export default BookCard;
