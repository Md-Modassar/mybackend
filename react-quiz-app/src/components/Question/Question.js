import { Button } from "@material-ui/core";
import React, { useState } from "react"
import { useHistory } from "react-router-dom";
import ErrorMessage from "../ErrorMassage/ErrorMessage";
import "./Question.css"
const Question=({
    currquts,
    setCurrqut,
    options,
    questions,
    correct,
    score,
    setScore,
    setQuestions
})=>{
    
   const [selected,setSelected]=useState();
   const [error,setError]=useState(false);
   const handleSelected=(i)=>{
    if(selected===i && selected===correct){
        return "select";
      } else if(selected=== i && selected !==correct) {
            return "wrong";
        }else if(i === correct)
        {
            return "select";
        }
   };
    const handleCheck=(i)=>{
        setSelected(i)
        if(i=== correct) setScore(score +1);
        setError(false);
    }
   const history =useHistory()
    const handleNext=()=>{
        if(currquts>8){
            history.push("/Result")
        }else if(selected){
            setCurrqut(currquts + 1)
            setSelected();
        }else{
            setError("Please select an Option before next question")
        }
    }
    const handleQuit=()=>{

    }
    return (

    <div className="question">
            <h1>Question {currquts +1}</h1>

      <div className="singleQuestion">  
              <h2>{questions[currquts].question}</h2>
            <div className="options">
                {error && <ErrorMessage>Please Fill All The Field</ErrorMessage>}
                {
                options && options.map((i)=>(<button
                onClick={()=>handleCheck(i)} 
                className={`singaleOption ${selected && handleSelected(i)}`}
                 key={i}
                 disabled={selected}>{i}</button>))
                }
           
            </div>
            <div className="controls">
               <Button
                variant="contained"
                color="secondary"
                size="large"
                style={{width:185}}
                   href="/"
                   onClick={handleQuit}
                 >Quit</Button>
               <Button
                 variant="contained"
                 color="primary"
                 size="large"
                 style={{width:185}}
                 onClick={handleNext}
                 >Next Question</Button>
            </div>
        </div>
    </div>
    )
}

export default Question