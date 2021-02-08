import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

const axios = require("axios");

function UserProfile({ profile }) {
  
  const [userProfile, setUserProfile] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    desc: "",
    images: []
  });

  
  const [images, setImages] = useState([
    { url: ""}
  ]);

  useEffect(() => {
    let userId = 0;
    
    if(localStorage.getItem("user-id")) {
      userId = JSON.parse(localStorage.getItem("user-id"))
    }

    axios.get(`https://finsta-v2.herokuapp.com/api/users/${userId}`)
      .then(res => {
        console.log(res.data)
        setUserProfile({
          firstname: res.data.firstname,
          lastname: res.data.lastname,
          username: res.data.username,
          password: res.data.password,
          desc: res.data.desc,
          images: res.data.images
        });

        setImages(res.data.images)
      })

  }, [])

  const imageSubmit = e => {
    e.preventDefault();

    let userId = 0;
    if(localStorage.getItem("user-id")) {
      userId = JSON.parse(localStorage.getItem("user-id"))
    }

    axios.put(`https://finsta-v2.herokuapp.com/api/users/${userId}`, {
      images: images
    })

    setImages(userProfile.images);
  }

  function imageChange(event) {
    const userInput = event.target.value;
    setImages(prevState => {
      return(
        [
          ...prevState,
          {
            url: userInput
          }
        ]
      );
    })
  }


  return (
    <div className="profile-holder">
      
      <Container>
        <Row>
          <Col>
            <div className="username">
              <h2>{userProfile.username}</h2>
            </div>
            <div className="user-name">name:{userProfile.firstname}</div>
            <div className="user-location">
              {/* location: {userProfile.location} */}
            </div>
            <div className="user-desc">
              <p>description: {userProfile.desc}</p>
            </div>
          </Col>
          <Col>
            <div className="user-buttons">
              <Form inline>
                <Form.Control
                  placeholder="username"
                  id="inlineFormInputUsername"
                ></Form.Control>
                <Button variant="primary"> Update Name</Button>
              </Form>
              <Form inline>
                <Form.Control
                  placeholder="location"
                  id="inlineFormInputLocation"
                ></Form.Control>
                <Button variant="primary"> Update Location</Button>
              </Form>
              <Form inline>
                <Form.Control
                  placeholder="description"
                  id="inlineFormDescLocation"
                ></Form.Control>
                <Button variant="primary"> Update Description</Button>
              </Form>
            </div>
          </Col>
        </Row>

        <button type="button" class="btn btn-dark float-right">Add Picture</button>

        <form class="form-group">
          <input 
            type="text" 
            className="form-control" 
            placeholder="image url"
            value={images[images.length - 1].url}
            onChange={imageChange}
          />
          <button 
            type="submit" 
            className="btn btn-primary"
            onClick={imageSubmit}
          >submit pic</button>
        </form>

        <Row>
          {" "}
          <h1> password reset placeholder</h1>
        </Row>
      </Container>

      <Container className="user-pictures">
        {
          userProfile.images ?
          userProfile.images.map(image => {
            return(
              <div className="image">{image.url}</div>
            );
          }): 
          null
        }
      </Container>
     
    </div>
  );
}

export default UserProfile;
