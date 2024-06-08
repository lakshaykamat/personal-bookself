import { Book } from "@/components/BookCard";

const LocalHandler = {
  getBooks: () => {
    const books = localStorage.getItem("books");
    if (books) {
      return JSON.parse(books);
    } else {
      return null;
    }
  },
  setBooks: (book: Book[]) =>
    localStorage.setItem("books", JSON.stringify(book)),
};

export default LocalHandler;
