import "./TopicSelect.css";

type topicSelectProps = {
    topics: string[];
    value: string;
    onChange: (newTopic: string) => void;
}

const TopicSelect: React.FC<topicSelectProps> = ({ topics, value, onChange }) => {
    return (
        <select className="topic-select" 
                value={value}
                onChange={(e) => onChange(e.target.value)}
                >
             <option value="">Select Topic</option>
            {topics.map((topic) => (
                <option key={topic} value={topic}>
                    {topic}
                </option>
            ))}
        </select>
    )
}

export default TopicSelect;
 



