import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import "../Styling/Images.css";

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

  return users.map((item) => {
    if (item.images.length) {
      let randIndex = Math.floor(Math.random() * item.images.length);

      if (item.images.length < 5) {
        for (let i = 0; i < item.images.length; i++) {
          return (
            <CardDeck style={{ width: "16rem" }}>
              <Card>
                <div className="front-images">
                  <Card.Img variant="top" src={item.images[randIndex].url} />
                </div>
              </Card>
            </CardDeck>
          );
        }
      } else {
        for (let i = 0; i < 5; i++) {
          return (
            <CardDeck style={{ width: "16rem" }}>
              <Card>
                <div className="front-images">
                  <Card.Img variant="top" src={item.images[randIndex].url} />
                </div>
              </Card>
            </CardDeck>
          );
        }
      }
    }
  });
}

/* we need three if statemts
  user.map
  for(let i =0; i <5; i++){
    (item =>{
      
    })
  }
  
  */

// <div className="holder">
//   <h3>home test</h3>
//   {console.log(users)}
//   {users.map((user) => {
//     if (user.images.length) {
//       for (let i = 0; i < 5; i++) {
//         return (
//           <div className="image">
//             <CardDeck style={{ width: "16rem" }}>
//               <Card border="secondary">
//                 <Card.Img variant="top" src={users.images} />
//                 <Card.Body>
//                   <Card.Text>{users.username}</Card.Text>
//                 </Card.Body>
//               </Card>
//             </CardDeck>
//           </div>
//         );
//       }
//     }
//   })}

//   {/* {users.map((user) => {
//     {
//       if (user.images[0] != undefined) {
//         const img2 = `https://finsta-v2.herokuapp.com/api/users${user.images[0]}`;
//         console.log(img2);
//         console.log(user.images[0].url);
//         console.log(user);

//         return (
//           <div id="ImageContainer">
//             <img src={user.images[0].url} alt="" class="Image" />
//           </div>
//         );
//       }
//     }
//   })} */}
// </div>
