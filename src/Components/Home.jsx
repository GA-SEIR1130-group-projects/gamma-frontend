import React, { useState, useEffect } from "react";
import '../Styling/Images.css'

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://finsta-v2.herokuapp.com/api/users")
      .then((res) => res.json())
      .then((res) => {
        setUsers(res);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="holder">
      <h3>home test</h3>
      
      {users.map((user) => {
        
      
{
  
          if (user.images[0] != undefined){
            const img2= `https://finsta-v2.herokuapp.com/api/users${user.images[0]}`
            console.log(img2)
            console.log(user.images[0].url) 
            console.log(user)
            
            return(<div id = 'ImageContainer'> 
             <img src={user.images[0].url} alt='' class='Image'/>
             </div>)
          }
        }

        
      })}
    </div>
  );
}

 
 /* we need three if statemts
 user.map
 for(let i =0; i <5; i++){
   (item =>{

   })
 }
 
 */
 