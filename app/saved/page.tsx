"use client";
import { BookCard2 } from "@/components/BookCard";
import LocalHandler from "@/lib/LocalHandler";

type Props = {};

const SavedBooks = (props: Props) => {
  let Books = undefined;
  if (typeof window !== "undefined") {
    Books = LocalHandler.getBooks();
  }
  return (
    <>
      <h2 className="mb-3 font-semibold text-xl">Your Saved Books</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {Books &&
          Books.map((item: any, i: number) => (
            <BookCard2
              key={i}
              title={item.title}
              image={item.image}
              editionCount={item.edition_count}
            />
          ))}
      </div>
    </>
  );
};

export default SavedBooks;
