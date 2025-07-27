import { useState } from "react";
import "./task2.css";

function Task2() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => setLoggedIn((flag) => !flag)}>
        {loggedIn ? "Logout" : "Login"}
      </button>
    </>
  );
}

export default Task2;
