import React, { useState, useEffect } from "react";

function UserProfile(props) {
  const [userProfile, setUserProfile] = useState([]);

  useEffect(() => {
    fetch(`https://finsta-v2.herokuapp.com/api/users/${props.match.params.id}`)
      .then((res) => res.json())
      .then((res) => {
        setUserProfile(res);
      })
      .catch(console.error);
  }, [props.match.params.id]);

  if (!userProfile) {
    return <h3>loading...</h3>;
  }

  return (
    <div className="profile-holder">
      <div className="username">
        <h1>{userProfile.username}</h1>
      </div>
      <div className="user-desc">
        <h3>{userProfile.desc}</h3>
      </div>
    </div>
  );
}

export default UserProfile;
