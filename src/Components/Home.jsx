import React, { useState, useEffect } from "react";

const url = "https://gamma-finsta.herokuapp.com/api/users";

export default function Home() {
  const [image, setImage] = useState([]);

  const getImage = async () => {
    const response = await fetch(url);
    const image = await response.json();
    setImage(image);
  };
  useEffect(() => {
    getImage();
  }, []);

  const imageData = image.results;

  if (image.length < 1) {
    return <h3> loading....</h3>;
  }

  return (
    <div className="HomeHeader">
      <h1>home test</h1>
      <div className="ImageContainer">
        {imageData.map((image, index) => {
          return `username: ${image.username}`;
        })}
      </div>
    </div>
  );
}
