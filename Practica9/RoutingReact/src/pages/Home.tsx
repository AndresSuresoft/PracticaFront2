import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-container">
      <h1>Bienvenido 📚</h1>
      <p>Aquí puedes explorar algunos libros</p>
      <Link to="/books" className="btn-link">Ver lista de libros</Link>
    </div>
  );
}
