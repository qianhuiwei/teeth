import React from "react";

// TODO: 1. inline the handleClick function 
// 2. create a Image list components
// 3. optimize the code that apply active style

function CapturedImg({ src, id, active, onClick }) {
    const handleClick = () => {
        onClick(id)
    }
    const activeStyle = { width:"200px", height:"100px", backgroundColor: "black", margin: "8px", border: "3px red solid" };
    const unActiveStyle = { width:"200px", height:"100px", backgroundColor: "black", margin: "8px"}
    return (
        <div
            onClick={handleClick}
            style={active ? activeStyle : unActiveStyle}
        >
            {src && (
                <img
                    style={{width:"200px", height:"100px"}}
                    src={src}
                    alt={"captured result"}
                />
            )}
        </div>
    );
}

export default CapturedImg;