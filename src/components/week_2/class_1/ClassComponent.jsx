import React from "react";
// import FunctionalComponent from "./FunctionalComponent";
import MockComponent from "./MockComponent";

class ClassComponent extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        // console.log("Aca van los console.log")
        const { saludo } = this.props
        return(            
            <div>
                <h1>{this.props.saludo.hello}</h1>              
                <MockComponent message = {saludo.subText} />
            </div>
        )
    }
}

export default ClassComponent;