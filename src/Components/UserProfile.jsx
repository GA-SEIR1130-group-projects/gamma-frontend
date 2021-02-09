import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

const axios = require("axios");

function UserProfile({ profile }) {
  const [userProfile, setUserProfile] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    desc: "",
    images: [],
  });


  const initialState = {
    url: ""
  }
  const [image, setImage] = useState(initialState.url);
 
  
  useEffect(() => {
    let userId = 0;

    if (localStorage.getItem("user-id")) {
      userId = JSON.parse(localStorage.getItem("user-id"));
    }

    axios
      .get(`https://finsta-v2.herokuapp.com/api/users/${userId}`)
      .then((res) => {
        console.log(res.data);
        setUserProfile({
          firstname: res.data.firstname,
          lastname: res.data.lastname,
          username: res.data.username,
          password: res.data.password,
          desc: res.data.desc,
          images: res.data.images,
        });
      });
  }, []);


  const imageSubmit = (e) => {
    e.preventDefault();

    let userId = 0;
    if (localStorage.getItem("user-id")) {
      userId = JSON.parse(localStorage.getItem("user-id"));
    }

    let allImages = userProfile.images.push(image);
    axios.put(
      `https://finsta-v2.herokuapp.com/api/users/${userId}/images`,
      image
    );

    setImage({ url: "" });
  };

  function imageChange(event) {
    const userInput = event.target.value;
    setImage((prevState) => {
      return {
        ...prevState,
        url: userInput,
      };
    });
  }


  function logout() {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <div className="profile-holder">
      {localStorage.getItem("user-id") === null ? null : (
        <>
          <div
            className="btn-group float-right"
            role="group"
            aria-label="Basic example"
          >
            <button type="button" className="btn btn-secondary">
              <Link to="/deleteProfile">Delete Profile</Link>
            </button>
            <button type="button" className="btn btn-secondary">
              <Link to="/editProfile">Edit Profile</Link>
            </button>
            <button type="button" className="btn btn-secondary">
              <Link to="/changePassword">Change Password</Link>
            </button>
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={logout}
            >
              Logout
            </button>
          </div>
          <Container>
            <Row>
              <Col>
                <div className="username">
                  <h2>{userProfile.username}</h2>
                </div>
                <div className="user-name">name:{userProfile.firstname}</div>
                <div className="user-desc">
                  <p>description: {userProfile.desc}</p>
                </div>
              </Col>
            </Row>


            

            <button 
              type="button" 
              className="btn btn-dark"
              data-toggle="modal"
              data-target="#addPicturesModal"
            >Add Picture</button>

            <div className="modal fade" id="addPicturesModal">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">Insert Images</div>

                  <div className="modal-body">
                    <form>
                      <div className="form-group">
                        <label for="imageUrl">Image url</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="image url"
                          value={image.url}
                          onChange={imageChange}
                        />
                      </div>
                      <div className="form-group">
                        <label for="imageDescription" className="float-left">Description</label>
                        <input 
                          type="text"
                          className="form-control"
                          placeholder="image description"
                        />
                      </div>
                    </form>
                  </div>

                  <div className="modal-footer">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={imageSubmit}
                      data-dismiss="modal"
                    >submit pic</button>
                  </div>
                </div>
              </div>
            </div>


          </Container>
        </>
      )}

      <Container className="user-pictures">
        {userProfile.images
          ? userProfile.images.map((image) => {
              return (
                <div className="image">
                  <CardDeck style={{ width: "16rem" }}>
                    <Card border="secondary">
                      <Card.Img variant="top" src={image.url} />
                      <Card.Body>
                        <Card.Text>{image.comments}</Card.Text>
                      </Card.Body>
                    </Card>
                  </CardDeck>
                </div>
              );
            })
          : null}
      </Container>
    </div>
  );
}



export default UserProfile;

