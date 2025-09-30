import { useState } from "react";
import "./Flashcard.css";
import type { Flashcard as FlashcardType, Topic } from "../types/types";

type FlashcardProps = {
  card: FlashcardType;
  topics: Topic[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
};

const Flashcard: React.FC<FlashcardProps> = ({ card, topics, onEdit, onDelete }) => {
  const [flipped, setFlipped] = useState(false);

  const topicColor =
    topics.find((t) => t.name === card.topic)?.color || "#e5e7eb";

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const confirmDelete = window.confirm("Are you sure you want to delete this card?");
    if (confirmDelete) {
      onDelete(card.id);
    }
  };

  return (
    <div
      className={`flashcard ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="flashcard-inner">
       
        <div className="flashcard-front">
      
          <div className="flashcard-tags">
            <span
              className="flashcard-topic"
              style={{ backgroundColor: topicColor }}
            >
              {card.topic}
            </span>
            {card.learned === true && (
              <span className="status-tag learned">Learned</span>
            )}
            {card.learned === false && (
              <span className="status-tag revision">Needs Revision</span>
            )}
          </div>

        
          <div className="flashcard-content">
            <strong>Question:</strong>
            <p>{card.question}</p>
          </div>
        </div>

 
        <div className="flashcard-back">
          <div className="flashcard-content">
            <strong>Answer:</strong>
            <p>{card.answer}</p>
            <div className="flashcard-actions">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit(card.id);
                }}
              >
                Edit
              </button>
              <button onClick={handleDeleteClick}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
