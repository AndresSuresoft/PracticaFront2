// src/data/books.ts
import type { Book } from '../types/Book'

export const books: Book[] = [
  {
    id: "1",
    title: "El Principito",
    author: "Antoine de Saint-Exupéry",
    description: "Un cuento filosófico sobre un niño y sus viajes por el universo."
  },
  {
    id: "2",
    title: "Cien años de soledad",
    author: "Gabriel García Márquez",
    description: "La historia de la familia Buendía en el pueblo ficticio de Macondo."
  },
  {
    id: "3",
    title: "Don Quijote de la Mancha",
    author: "Miguel de Cervantes",
    description: "Las aventuras de un hidalgo que lucha contra molinos de viento."
  },
  {
    id: "4",
    title: "Harry Potter y la piedra filosofal",
    author: "J.K. Rowling",
    description: "El inicio de la saga mágica donde Harry descubre que es un mago y asiste a Hogwarts."
  },
  {
    id: "5",
    title: "Los 7 hábitos de la gente altamente efectiva",
    author: "Stephen R. Covey",
    description: "Un libro de desarrollo personal y liderazgo que enseña hábitos para alcanzar el éxito."
  }
];
