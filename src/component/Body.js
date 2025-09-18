import { useEffect, useState } from "react";

function Body()
{

   
   const [profile, setprofile]=useState([]);
   const [inpnumber,inputnumber1]=useState(" ");
   const [count , countnumber]=useState(10);

   async function generateProfile(count){
      const ran=Math.floor((Math.random()*1000)+1);
      const response=await fetch(`https://api.github.com/users?since=${ran}&per_page=${count}`);
      const data=await response.json();


      setprofile(data);
   }

   useEffect(()=>{
      generateProfile(count);
   },[count]);

   return (

      <div>
         <div className="input">
            <input type="text" value={inpnumber} onChange={(e)=>inputnumber1(e.target.value)}></input>
            <button className="but" onClick={()=>{countnumber(Number(inpnumber))}}>Click</button>
         </div>



         <div className="profiles"> 
            {
            
               profile.map((value)=>{
                  return( 
                  <div key={value.id} className="cards">
                     <img src={value.avatar_url}></img>
                     <h2>{value.login}</h2>
                     <a href={value.html_url} target="_blank">Profile</a>
                  </div>
               )
               })
            }
         </div>
      </div>
   )
}

export default Body;