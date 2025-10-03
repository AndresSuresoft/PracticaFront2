import { useNavigate, useParams } from "react-router-dom";
import { books } from "../data/booksData";
import { useEffect } from "react";

export default function BookDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const book = books.find((b) => b.id === id);

  useEffect(() => {
    if (!book) {
      navigate("/no-encontrado", { replace: true });
    }
  }, [book, navigate]);

   if (!book) return null;

  return (
    <div className="book-container">
      <h2>{book.title}</h2>
      <p><strong>Autor:</strong> {book.author}</p>
      <p>{book.description}</p>
    </div>
  );
}
