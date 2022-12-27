import React from "react";

class Card extends React.Component{
    constructor(){
        super();
        console.log("CONSTRUCTOR");
        this.state = {count : 0}
       
    }
    //called after render method only once
    componentDidMount(){
        console.log("COMPONENT DID MOUNT");
    }

    componentDidUpdate(){
        console.log("COMPONENT DID UPDATE")
    }
    handleClick = () =>{
        this.setState((prevState)=>{
            return{
                count : prevState.count + 1
            }
        })
    }
    render(){
        console.log("render")
        return(
            <div id="cardContainer">
                <b>Class based component</b>
                <p>
                Count : {this.state.count}
                </p>
              
               <button onClick={this.handleClick}> Increase </button>
               
            </div>
        )
    }
}
export default Card;