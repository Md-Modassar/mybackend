import React, { Component } from "react";

class Button extends React.Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    increament(){
        this.setState({
         count:this.state.count+1
        });
    }
    decreanment(){
        this.setState({
            count:this.state.count-1
        })
    }
    render(){
        
        return(
           <div >
            
            <input type="number" value={this.state.count}/>
            <button onClick={()=>{
                this.increament()
            }} >incriment</button>
            <button onClick={()=>{
                this.decreanment()
            }}>decriment</button>
        </div>
    )
}
}

export default Button













