
export type Topic = {
    name: string;
    color: string;
};

export type Flashcard = {
    id: number;
    question: string;
    answer: string;
    topic: string;
    learned?: boolean; // 👈 opcional
};
