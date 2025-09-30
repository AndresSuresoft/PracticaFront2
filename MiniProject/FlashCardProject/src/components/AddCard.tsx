import './AddCard.css'

type AddCardProps = {
    onAdd: () => void;  
}

const AddCard: React.FC<AddCardProps> = ({ onAdd }) => {
    return (
        <div className="add-card" onClick={onAdd} aria-label="Add new flashcard" >
            <span>+</span>
        </div>
    )
}

export default AddCard;