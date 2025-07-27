import { useRef } from "react";
import { Form } from "react-router-dom";
import "./loginForm.css";

export default function LoginForm() {
  let userRef = useRef("");
  let passRef = useRef("");

  function handleSubmit(e) {
    e.preventDefault();
    const userObj = {
      userName: userRef.current.value,
      password: passRef.current.value,
    };
    console.log(userObj);
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="username">Username</label>
      <input ref={userRef} type="text" name="username" id="username" />
      <label htmlFor="password">Password</label>
      <input ref={passRef} type="password" name="password" id="password" />
      <button>Submit</button>
    </form>
  );
}
