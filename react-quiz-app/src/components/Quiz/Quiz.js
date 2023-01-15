import React, { useEffect, useState } from "react"
import { CircularProgress } from "@material-ui/core";
import "./Quiz.css"
import Question from "../Question/Question";

const Quiz=({name,questions,score,setQuestions,setScore})=>{
    const [options,setOptions]=useState();
    const [currquts,setCurrquts]=useState(0);
    useEffect(()=>{
        console.log(questions)

       setOptions(questions && handleShuffle([
         questions[currquts]?.correct_answer,
         ...questions[currquts]?.incorrect_answers
        ]))
     },[questions,currquts]);

     const handleShuffle=(optionss)=>{
      return optionss.sort(()=>Math.random()-0.5);
     }


    return (
        <div className="quiz">
             <span className="subtitle">Welcome {name}</span>
             
             {
                questions ?(<>
                    <div className="quizinfo">
                        <span>
                            {questions[currquts].category}
                        </span>
                        <span> Score:{score}</span>

                    </div>
                    <Question
                      currquts={currquts}
                      setCurrqut={setCurrquts}
                      questions={questions}
                      options={options}
                      correct={questions[currquts]?.correct_answer}
                      score={score}
                      setScore={setScore}
                      setQuestions={setQuestions}
                      />
                </>):<CircularProgress
                style={{margin:100}}
                color="inherit"
                size={150}
                thickness={1}/>
             }
             
        </div>
    )
}

export default Quiz