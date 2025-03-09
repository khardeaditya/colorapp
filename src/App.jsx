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
              
            </div>
        </div>
    )
}
export default App