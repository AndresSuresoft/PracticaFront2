import ColorList from "./ColorList";
import ColorInput from "./ColorInput";
import { useState } from "react";
import '../index.css'

const ColorManager: React.FC = () =>{
    const [colors, setColors] = useState<string[]>([]);

    const addColor = (newColor: string) => {
        if(colors.includes(newColor)){
            alert("Color ya existe")
            return;
        }
        setColors([...colors, newColor])
    }

    const changeBackground = (color: string) => {
        document.body.style.backgroundColor = color;
    }

    return (
        <div className="color-manager-card">
            <h1>Color Manager</h1>
            <ColorInput OnaddColor={addColor}/>
            <ColorList colors={colors} OncolorClick={changeBackground}/>
        </div>
    )
}

export default ColorManager;