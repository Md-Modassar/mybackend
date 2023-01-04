// import React, { useState } from "react";

// const Form =()=>{
    
//   const [formvalue,setFormValue]=useState({
//     FirstName:"",
//     LastName:"",
//     Gender:"",
//     Country:""
//   });

//     const handleInput=(e)=>{
//       //const {name,value}=e.target
//       const name=e.target.name
//       const value=e.target.value
//      setFormValue({...formvalue,[name]:value});
//      //console.log(formvalue)
//    }
//    return (
//      <>
//        <form action="">
//           <div>
//             <label htmlFor="FisrtName">FirstName</label>
//             <input type="text" autoComplete="off" 
//              value={useregistation.FirstName}
//              onChange={handleInput}
//              name="FirstName" id="FirstName"/>
//           </div>
//             <br/>
//           <div>
//             <label htmlFor="LastName">LastName</label>
//             <  input type="text" autoComplete="off" 
//              value={useregistation.LastName}
//              onChange={handleInput}
//              name="LastName" id="LastName"/>
//           </div>
//             <br/>
//            <div>
//             <label htmlFor="Gender">Gender</label>
//             <input type="text" autoComplete="off" 
//              value={useregistation.Gender}
//              onChange={handleInput}
//              name="Gender" id="Gender"/>
//           </div>
//            <br/>
//           <div>
//             <label htmlFor="Country">Country </label>
//             <input type="text" autoComplete="off" 
//              value={useregistation.Country}
//              onChange={handleInput}
//              name="Country" id="Country"/>
//           </div>
//              <button>submit</button>
//        </form>
        
//      </>
        
//    )
// }

// export default Form