import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Textarea from './components/Textrea';
//import Form from './components/MyForm'
import React, { useState } from 'react';

function App() {

 // const initialValue={FirstName:"",LastName:"",Gender:"",Country:""};
  const [formvalue,setFormValue]=useState({
    FirstName:"",
    LastName:"",
    Gender:"",
    Country:"",
    Email:""
  });
  const [recods,setRecods]=useState([])
  const handlechange=(e)=>{
     //const {name,value}=e.target
     const name=e.target.name
     const value=e.target.value
    setFormValue({...formvalue,[name]:value});
    console.log(formvalue)
  }
  const handsumbit=(e)=>{
    e.preventDefault();
    const newRecode={...formvalue, id:new Date().getTime().toString()}
    //console.log(recods)
    setRecods([recods,newRecode])
    console.log(recods)
    setFormValue({FirstName:"",LastName:"",Gender:"",Country:"",Email:""})
  }
  return (
    
      
      <>
      <form action="" onSubmit={handsumbit} >
       
         <h1>Registation Form</h1>
         <div className="ui divider"></div>
         <div className="ui form"></div>
         <div className="field">
           <label>FirstName</label>
           <br/>
           <input type="text" name="FirstName" placeholder="FirstName" value={formvalue.FirstName}
             onChange={handlechange}
             />
         </div>
           <br/>
         <div>
           <label>LastName</label>
           <br/>
           <  input type="text" name="LastName" placeholder="LastName" value={formvalue.LastName} 
             onChange={handlechange}
            />
         </div>
           <br/>
         <div>
           <label >Gender</label>
           <br/>
           <input type="text" name="Gender" placeholder="Gender" value={formvalue.Gender}
              onChange={handlechange}
            />
         </div>
          <br/>
         <div>
           <label>Country </label>
           <br/>
           <input type="text" name="Country" placeholder="Country" value={formvalue.Country}
              onChange={handlechange}
            />
         </div>
         <br/>
         <div>
           <label>Email </label>
           <br/>
           <input type="text" name="Email" placeholder="Email" value={formvalue.Email}
              onChange={handlechange}
            />
         </div>
         <br/>
            <button>submit</button>
      </form>
       <div>{
           recods.map((curele)=>{
            return(
                  <p>{curele.FirstName}</p>,
                  <p>{curele.LastName}</p>,
                  <p>{curele.Gender}</p>,
                  <p>{curele.Country}</p>,
                  <p>{curele.Email}</p>
            )
           })
          }
       </div>

    </>
       
  )
}

export default App;
