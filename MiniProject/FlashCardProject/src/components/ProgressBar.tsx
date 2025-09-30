import './ProgressBar.css';

type progresBar ={
    learned: number;   
    total: number;     
}

const ProgressBar: React.FC<progresBar> = ({ learned, total }) => {
const percent = total > 0 ? Math.round((learned / total) * 100) : 0;

    return (
        <div className="progress-container">
            
            <div className="progress-bar">
                <div className="progress-bar__fill" style={{ width: `${percent}%` }}>

                </div>
            </div>
        </div>
    )
}

export default ProgressBar;