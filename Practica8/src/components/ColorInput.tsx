import type React from "react";
import { useState } from "react";


type colorInputProps = {
    OnaddColor: (color: string) => void;
}

const ColorInput: React.FC<colorInputProps> = ({ OnaddColor}) => {
    const [colorInput, setColorInput] = useState<string>("");

    const handleAdd = () => {
        if( colorInput.startsWith("#") && colorInput.length === 7){
            OnaddColor(colorInput);
            setColorInput("");
        } else {
            alert("Ingrese un color valido en formato hex (#fff000) ");
        }
    };

    return (
        <div className="input-container">
            <input 
                type="text" value={colorInput} 
                onChange={(e) => setColorInput(e.target.value)} 
                placeholder="#ff0000"
                className="color-input" />
                <button onClick={handleAdd} className="add-button">Add Color</button>
        </div>
    )
    
}

export default ColorInput;