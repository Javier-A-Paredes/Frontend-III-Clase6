import React from "react";
// import ClassComponent from "./ClassComponent";
import MockComponent from "./MockComponent";
const FunctionalComponent = (props) =>{
    // console.log("Desde functional component")
    return (
        <div>
            <h1>Soy un componente funcional</h1>            
            <MockComponent message = {props.subText} />
        </div>
    )
}

export default FunctionalComponent;