import React from 'react'
import Light from "../../img/sun.png"
import Dark from "../../img/crescent-moon.png"
import "./toggle.css"

// using our context API
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Toggle = () => {
    const theme = useContext(ThemeContext);

    // handle click on toggle switch, 
    const handleClick = () => {
        // onClick, dispatch action
        theme.dispatch({ type: "TOGGLE" });
    };


    return (
        <div className="t">
            <img src={Light} alt="Sun" className="t-icon" />
            <img src={Dark} alt="Moon" className="t-icon" />
            
            {/* toggle btn */}
            <div 
                className="t-button" 
                onClick={handleClick} 
                // if state is darkMode; move 0px from the left, else 25px from the left
                style={{ left: theme.state.darkMode ? 0 : 25 }}
            ></div>
        </div>
    )
}

export default Toggle