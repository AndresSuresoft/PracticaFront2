// src/components/CardForm/CardForm.tsx
import React, { useState } from "react";
import "./CardForm.css";

type Topic = {
  name: string;
  color: string;
};

type CardFormProps = {
  initialData?: {
    id?: number;
    question: string;
    answer: string;
    topic: string;
  };
  topics: Topic[];
  onSave: (card: { id?: number; question: string; answer: string; topic: string }) => void;
  onAddTopic: (topic: Topic) => void;
  onDelete?: (id: number) => void;
  onClose: () => void;
};

const CardForm: React.FC<CardFormProps> = ({
  initialData,
  topics,
  onSave,
  onAddTopic,
  onDelete,
  onClose,
}) => {
  const [question, setQuestion] = useState(initialData?.question || "");
  const [answer, setAnswer] = useState(initialData?.answer || "");
  const [topic, setTopic] = useState(initialData?.topic || "");
  const [newTopic, setNewTopic] = useState("");
  const [color, setColor] = useState("#6366f1"); // morado por defecto
  const [errors, setErrors] = useState<{ question?: string; answer?: string; topic?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!question.trim()) newErrors.question = "Field required";
    if (!answer.trim()) newErrors.answer = "Field required";
    if (!topic.trim()) newErrors.topic = "Field required";
    if (topic === "new" && !newTopic.trim()) newErrors.topic = "Field required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    let finalTopic = topic;

    if (topic === "new" && newTopic) {
      onAddTopic({ name: newTopic, color });
      finalTopic = newTopic;
    }

    onSave({ id: initialData?.id, question, answer, topic: finalTopic });
    onClose();
  };

  const handleDelete = () => {
    if (initialData?.id && onDelete) {
      const confirmDelete = window.confirm("Are you sure you want to delete this card?");
      if (confirmDelete) {
        onDelete(initialData.id);
        onClose();
      }
    }
  };

  return (
    <div className="card-form__overlay">
      <form className="card-form" onSubmit={handleSubmit}>
        <h3>{initialData?.id ? "Edit Question" : "Create Question"}</h3>

        <input
          type="text"
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        {errors.question && <span className="error">{errors.question}</span>}

        <textarea
          placeholder="Answer..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        {errors.answer && <span className="error">{errors.answer}</span>}

        <select value={topic} onChange={(e) => setTopic(e.target.value)}>
          <option value="">Select Topic</option>
          {topics.map((t) => (
            <option key={t.name} value={t.name}>
              {t.name}
            </option>
          ))}
          <option value="new">＋ Add new topic</option>
        </select>
        {errors.topic && <span className="error">{errors.topic}</span>}

        {topic === "new" && (
          <div className="new-topic-fields">
            <input
              type="text"
              placeholder="New topic name"
              value={newTopic}
              onChange={(e) => setNewTopic(e.target.value)}
            />
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
          </div>
        )}

        <div className="card-form__buttons">
          <button type="submit" className="btn-save">Save</button>
          {initialData?.id && onDelete && (
            <button type="button" className="btn-delete" onClick={handleDelete}>
              Delete
            </button>
          )}
          <button type="button" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default CardForm;
