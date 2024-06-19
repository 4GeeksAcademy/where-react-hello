import React, { useState } from 'react';
import './TrafficLight.css'; 

const TrafficLight = () => {
    const [color, setColor] = useState("red");

    const handleClick = (selectedColor) => {
        setColor(selectedColor);
    };

    return (
        <div className="traffic-light-container">
            <div className="traffic-light-top">
                <div
                    className={`light red ${color === "red" ? "glow" : ""}`}
                    onClick={() => handleClick("red")}
                />
                <div
                    className={`light yellow ${color === "yellow" ? "glow" : ""}`}
                    onClick={() => handleClick("yellow")}
                />
                <div
                    className={`light green ${color === "green" ? "glow" : ""}`}
                    onClick={() => handleClick("green")}
                />
            </div>
            <div className="traffic-light-bottom" />
        </div>
    );
};

export default TrafficLight;
