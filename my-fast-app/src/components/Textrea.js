import React,{Component} from "react";

class textarea extends Component{
   constructor(){
    super();
     this.state={
        input:'',
        showParagraph: false,
     };
   }
    render(){
        console.log(this.state.input);
        return (
            <div>
                <br/>
                <br/>
                <textarea
            
                value={this.state.input} 
                 onChange={(e)=>this.setState({input:e.target.value})}/>
                 <br/>
                <button onClick={()=>{
                    this.setState({
                        showParagraph:!this.state.showParagraph
                    })
                }}>Display in Upercase</button>
                {this.state.showParagraph &&<p>{this.state.input.toUpperCase()}</p>}
                <p></p>
            </div>
        );
    }
}

export default textarea