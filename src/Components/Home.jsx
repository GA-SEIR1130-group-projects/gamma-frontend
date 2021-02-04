import React, { useState, useEffect } from "react";

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
        return <div>{user.username}</div>;
      })}
    </div>
  );
}
