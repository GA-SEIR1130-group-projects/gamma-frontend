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

  return (
    <div className="home-container d-flex flex-column">
      {
        users.map((item) => {
          if (item.images.length) {
            let randIndex = Math.floor(Math.random() * item.images.length);

            if (item.images.length < 5) {
              for (let i = 0; i < item.images.length; i++) {
                return (
                  <CardDeck
                    // style={{ width: "16rm" }}
                    variant="top"
                    // class="d-flex align-self-start justify-content-center flex-wrap"
                  className="d-flex flex-column"
                  >
                    <Card>
                      <div className="front-images d-flex flex-column">
                        <Card.Img src={item.images[randIndex].url} />
                      </div>
                    </Card>
                  </CardDeck>
                );
              }
            } else {
              for (let i = 0; i < 5; i++) {
                return (
                  <CardDeck
                    // style={{ width: "10rem" }}
                    variant="top"
                    // class="d-flex align-self-start justify-content-center flex-wrap"
                  >
                    <Card>
                      <div class="d-flex flex-column" className="front-images">
                        <Card.Img
                          variant="top"
                          src={item.images[randIndex].url}
                        />
                      </div>
                    </Card>
                  </CardDeck>
                );
              }
            }
          }
        })
      }

    </div>
  );
}
