import React, { useState } from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header"
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Result from './components/Result/Result';
import axios from "axios"
function App() {
      const [name,setName]=useState("")
      const [questions,setQuestions]=useState("")
      const [score,setScore]=useState(0)


      const fetchQuestions= async(category="")=>{
         const {data}= await axios.get(
            `https://opentdb.com/api.php?amount=10${
          category && `&category=${category}`
         }&type=multiple`
         )
         setQuestions(data.results)
      }
 return( <BrowserRouter>
       <div className="app" style={{backgroundImage:"url(./bg.webp)"}}> 
        <Header />
        <Switch>
         <Route path="/" exact>
          <Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>
         </Route>
         
         <Route path="/Quiz" exact>
          <Quiz name={name}
            questions={questions}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions} />
         </Route>
        
         <Route path="/Result" exact>
          <Result  name={name} score={score}/>
         </Route>
        </Switch>
        </div>
        <Footer/>
  </BrowserRouter>
 )
  
  
}

export default App;
