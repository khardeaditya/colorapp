import { useState } from "react";
import "./App.css"
import "./index.css"
function App() {

    const [color, setColor] = useState('yellow')

    return (
        <div className="main-container" style={{ backgroundColor: color }}>
            <div className="div-bar">
                <button className="btn" style={{backgroundColor:"indigo" }} onClick={() => setColor('black')}>
                    indigo
                </button>
                <button className="btn" style={{backgroundColor:"violet"}} onClick={() => setColor('violet')}>
                    violet</button>
                <button className="btn" style={{backgroundColor:"orange"}} onClick={() => setColor('orange')}>
                    orange
                </button>
                <button className="btn" style={{backgroundColor:"tomato"}} onClick={() => setColor('tomato')}>
                    tomato
                </button>
                <button className="btn" style={{backgroundColor:"crimson"}} onClick={() => setColor('crimson')}>
                    crimson
                </button>
                <button className="btn" style={{backgroundColor:"yellow"}} onClick={() => setColor('yellow')}>
                    yellow
                </button>
                <button className="btn" style={{backgroundColor:"purple"}} onClick={() => setColor('purple')}>
                    purple
                </button>
                <button className="btn" style={{backgroundColor:"grey"}} onClick={() => setColor('grey')}>
                    grey
                </button>
                <button className="btn" style={{backgroundColor:"orange"}} onClick={() => setColor('orange')}>
                    Orange
                </button>
            </div>
        </div>
    )
}
export default App