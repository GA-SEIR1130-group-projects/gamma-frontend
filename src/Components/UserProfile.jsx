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
    images: [],
  });

  const initialImage = {
    url: "",
  };
  const initialName = {
    firstname: "",
  };
  const initialDesc = {
    desc: "",
  };
  const [name, setName] = useState(initialName);
  const [image, setImage] = useState(initialImage);
  const [desc, setDesc] = useState(initialDesc);

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
  //////////// image submit
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

    setImage(initialImage);
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
  //////////////////////// firstname Update
  const nameSubmit = (e) => {
    e.preventDefault();

    let userId = 0;
    if (localStorage.getItem("user-id")) {
      userId = JSON.parse(localStorage.getItem("user-id"));
    }

    let theName = userProfile.images.push(name);
    axios.put(`https://finsta-v2.herokuapp.com/api/users/${userId}/`, name);

    setName(initialName);
  };

  function nameChange(event) {
    const userInput = event.target.value;
    setName((prevState) => {
      return {
        ...prevState,
        firstname: userInput,
      };
    });
  }
  ///////////////////// user description update

  const descSubmit = (e) => {
    e.preventDefault();

    let userId = 0;
    if (localStorage.getItem("user-id")) {
      userId = JSON.parse(localStorage.getItem("user-id"));
    }

    let theName = userProfile.images.push(name);
    axios.put(`https://finsta-v2.herokuapp.com/api/users/${userId}/`, desc);

    setDesc(initialDesc);
  };

  function descChange(event) {
    const userInput = event.target.value;
    setDesc((prevState) => {
      return {
        ...prevState,
        desc: userInput,
      };
    });
  }
  //////////////

  return (
    <div className="profile-holder">
      <Container>
        <Row>
          <Col>
            <div className="username">
              <h1>{userProfile.username}</h1>
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
              <Form
                inline
                placeholder="username"
                id="inlineFormInputUsername"
                onChange={nameChange}
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="first name"
                  value={name.firstname}
                  onChange={nameChange}
                />
                <Button variant="primary" type="submit" onClick={nameSubmit}>
                  {" "}
                  Update Name
                </Button>
              </Form>

              <Form
                inline
                placeholder="description"
                id="inlineFormDescLocation"
                onChange={descChange}
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="user description"
                  value={name.desc}
                  onChange={descChange}
                />
                <Button variant="primary" type="submit" onClick={descSubmit}>
                  {" "}
                  Update Description
                </Button>
              </Form>
            </div>
          </Col>
        </Row>

        <button type="button" class="btn btn-dark float-right">
          Add Picture
        </button>
        <Row>
          <br />
          <div className="url-submit-form">
            <form className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="image url"
                value={image.url}
                onChange={imageChange}
              />
              <button
                type="submit"
                className="btn btn-primary"
                onClick={imageSubmit}
              >
                submit pic
              </button>
            </form>
          </div>
        </Row>

        {/* <Row>
          {" "}
          <h1> password reset placeholder</h1>
        </Row> */}
      </Container>

      <Container className="user-pictures">
        {userProfile.images
          ? userProfile.images.map((image) => {
              return <div className="image">{image.url}</div>;
            })
          : null}
      </Container>
    </div>
  );
}

export default UserProfile;
