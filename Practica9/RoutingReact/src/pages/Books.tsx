// src/pages/Books.tsx
import BookList from "../components/BookList";
import { books } from "../data/booksData";

export default function Books() {
  return (
    <div className="book-container">
      <h2>Lista de Libros</h2>
      <BookList books={books} />
    </div>
  );
}
