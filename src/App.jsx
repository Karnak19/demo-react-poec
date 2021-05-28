import React, { useEffect, useState } from "react";
import Button from "./Button";
import Hello from "./Hello";

function App() {
  const [count, setCount] = useState(50);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("https://api.randomuser.me/")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.results[0]);
      });
  }, [count]);

  const users = [
    "Clara",
    "Rémi",
    "Daniela",
    "Lyudmila",
    "Christian",
    "Jean-Noël",
  ];

  return (
    <div
      style={{
        fontSize: 30,
        minHeight: "80vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <div>count: {count}</div>
      <div>{user.picture && <img src={user.picture.medium} alt="" />}</div>
      <Button text="increment" onClick={() => setCount(count + 1)} />
      <Button text="decrement" onClick={() => setCount(count - 1)} />
      <Button text="count to 20" onClick={() => setCount(20)} />
      hello world
      {users.map((user) => {
        return <Hello name={user} />;
      })}
    </div>
  );
}

export default App;
