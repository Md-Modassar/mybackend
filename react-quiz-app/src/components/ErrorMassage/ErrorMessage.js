import React from "react";

const ErrorMessage=({children})=>{
    return (
        <div
            style={
                {
                    width:"150%",
                    padding:10,
                    marginBottom:4,
                    backgroundColor:"orangered",
                    textAlign:"center",
                    color:"white",
                    textTransfrom:"capitaize",
                }
            }>
            {children}
        </div>
    )
}

export default ErrorMessage