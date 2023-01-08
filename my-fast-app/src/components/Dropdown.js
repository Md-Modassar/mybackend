import React, { useState } from "react";

import Button from "./Button";
const options = [
    {
      label: "BTC",
      value: "BTC",
    },
    {
      label: "ETH",
      value: "ETH",
    },
    {
      label: "AVA",
      value: "AVA",
    },
    {
      label: "XRP",
      value: "XRP",
    },
    {
        label: "USDC",
        value: "USDC",
      },
  ];

class Dropdown extends React.Component{

    render(){
        return(
            <div>
                <form>
                    
                    <select >
                    {options.map((option) => (
                       <option value={option.value} 
                       >{option.label}</option>
                        ))
                     }
                    </select>
                    <button onClick={()=>{
                        fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=btc').then((res)=>
                        console.log(res))
                    }}>submit</button>
                
                </form>
            </div>
        )
    }
} 

export default Dropdown