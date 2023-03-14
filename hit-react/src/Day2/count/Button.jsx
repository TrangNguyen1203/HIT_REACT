import React from "react";

const Button = (props) => {
    return (
        <div>
            <button style={{"padding" : "8px 16px", "margin":"16px","backgroundColor": "black", "color" : "#fff"}}>{props.title}</button>
        </div>
    )
}

export default Button;