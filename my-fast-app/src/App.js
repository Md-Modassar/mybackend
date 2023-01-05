import logo from './logo.svg';
import './App.css';
import Textarea from './components/Textrea';
import Button from './components/Button'
import React,{useState } from 'react';



function App()  {
  //  const [name,setname]=useState('')
  //  const [Email,setEmail]=useState('')
  //  const [MobileNo,setMobileNo]=useState('')
   
  
  //   return(
    
    
  //   <>
  //     <form onSubmit={(e)=>{
  //       e.preventDefault()
  //       console.log(name,Email,MobileNo)
  //     }}>
  //     <h1>student form </h1>
  //      <div>

  //       <label>sname</label>
  //       <br/>
  //       <input type="text" value={name} 
  //        onChange={(e)=>setname(e.target.value)}></input>
  //      </div>
  //      <div>
  //       <label>Email</label>
  //       <br/>
  //       <input type="email" value={Email}
  //        onChange={(e)=>{setEmail(e.target.value)}}></input>
  //      </div>
  //      <div>
  //       <label>MobileNo</label>
  //       <br/>
  //       <input type="number" value={MobileNo} 
  //        onChange={(e)=>{setMobileNo(e.target.value)}}></input>
  //      </div>
  //      <div>
  //       <button>submit</button>
  //      </div>
  //      </form>
  //      <div>
  //       this is your details
  //       <br/>
  //       name:{name}
  //       <br/>
  //       Email:{Email}<br/>
  //       MobileNo:{MobileNo}
  //      </div>
  //      <Button/>
  //   </>
  //  );
  return(
    <div>
      <h1>This my Today Assignment</h1>
    <Button/>
    </div>
    
  )
   
}


    

export default App;
