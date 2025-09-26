import '../index.css'

type ColorListProps = {
    colors: string[];
    OncolorClick: (selectedColor: string) => void;

}

const ColorList: React.FC<ColorListProps> = ({ colors, OncolorClick }) => {
    return (
        <div className="swatches-container">
            {colors.map((color,index) => (
                <div key={index} onClick={() => OncolorClick(color)} 
                    style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: color,
                    border: "1px solid #000",
                    cursor: "pointer",
                  }}>
                </div>
            ))}
        </div>
    )
}

export default ColorList;