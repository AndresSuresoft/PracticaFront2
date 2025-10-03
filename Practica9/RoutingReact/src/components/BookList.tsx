
import { Link } from "react-router-dom";
import type { Book } from "../types/Book";

type BookListProps = {
  books: Book[];
};

export default function BookList({ books }: BookListProps) {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <Link to={`/books/${book.id}`}>
            {book.title} - {book.author}
          </Link>
        </li>
      ))}
    </ul>
  );
}
