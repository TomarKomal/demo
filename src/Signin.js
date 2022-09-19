import React from "react";
function Signin(){
    return(
        <div>
            <h1>Sign In</h1>
            Email:<input type="email"/><br/>
            Password:<input type="password"/><br/>
            <input type="button" value="submit"/>
        </div>
    )
}
export default Signin;