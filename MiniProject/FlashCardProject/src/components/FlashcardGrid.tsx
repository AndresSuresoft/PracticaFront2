import React from "react";
import Flashcard from "../components/Flashcard";
import "./FlashcardGrid.css";
import type { Flashcard as FlashcardType, Topic } from "../types/types";

type FlashcardGridProps = {
  cards: FlashcardType[];
  topics: Topic[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

const FlashcardGrid: React.FC<FlashcardGridProps> = ({ cards, topics, onEdit, onDelete }) => {
  return (
    <div className="flashcard-layout">
      {cards.map((card) => (
        <Flashcard
          key={card.id}
          card={card}
          topics={topics}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default FlashcardGrid;
