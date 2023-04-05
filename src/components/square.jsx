import React from "react";
import "../App.css";
const Square = (props) =>{
    return(
        <div className="square" onClick={props.onClick} style={{border: "2px solid white", borderRadius:"0", color: "white", width: "100%", height: "100%", textAlign:"center", display: "flex", justifyContent: "space-around", alignItems:"center", fontSize:"100%", fontWeight:"bold", fontFamily:"sans-serif"        
        }}>
            <h5>{props.value}</h5>
        </div>
    );
}
export default Square;