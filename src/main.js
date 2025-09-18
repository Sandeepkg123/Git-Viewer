import React,{useEffect,useState} from "react";
import ReactDom from "react-dom/client"

import Body from "./component/Body";
import Header from "./component/Header";



function GithubProfile(){

    return(
        <>  
            <Header></Header>
            <Body></Body>
        </>
    )
}

ReactDom.createRoot(document.getElementById("root")).render(<GithubProfile/>)