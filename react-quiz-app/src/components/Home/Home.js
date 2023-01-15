import React, { useState } from "react";
import "./Home.css"
import {Button, MenuItem, TextField} from '@material-ui/core';
import Categories from "../../data/Categories";
import { useHistory } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMassage/ErrorMessage";


const Home=({name,setName,fetchQuestions})=>{
   const [category,setCategory]=useState("")
   const [error,setError]=useState(false)
   const history=useHistory()
   const handlesumbit=()=>{
    if(!category||!name){
     setError(true)
     return ;
    }else{
      setError(false)
      fetchQuestions(category)
      history.push("/Quiz")
      
    }
   }
    return (
        <div className="content">
            <div className="settings">
                 <span style={{fontSize:13}}>Quiz Setting</span>
              <div className="setting_select">
                {error && <ErrorMessage>Please Fill All The Field</ErrorMessage>}
               <TextField style={{marginBottom:10}} 
               label="Enter Your Name" variant="outlined"
                onChange={(e)=>setName(e.target.value)}/>
              
               <TextField style={{marginBottom:10}} 
               label="Enter Your EmailId" variant="outlined"
                />

               <TextField select label="select Subject"  variant="outlined" style={{marginBottom:10}}
                  onChange={(e)=>setCategory(e.target.value)}
                   value={category}>
                   {
                    Categories.map((cat)=>(
                      <MenuItem key={cat.category} value={cat.value}>
                      {cat.category}
                      </MenuItem>
                    ))
                   }
                 
               </TextField>
               
              <Button style={{marginBottom:10}} variant="contained" color="primary" 
                onClick={handlesumbit}>Start Quiz</Button>
              </div>
            </div>
           <img src="/quizp.svg" className="banner" alt="quiz img "/>
        </div>
    )
}

export default Home