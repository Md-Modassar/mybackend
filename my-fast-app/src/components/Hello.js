import React, { createElement } from "react";

function Hello(){
    // return (
    //     <div>
    //         <h1>Hello modassar</h1>
    //     </div>
    // )
    return createElement('div',null,React.createElement('h1',null,'hello modassar'))
}


export default Hello