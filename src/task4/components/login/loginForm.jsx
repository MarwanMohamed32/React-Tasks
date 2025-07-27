import { useRef } from "react";
import { Form } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./loginForm.css";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmitForm(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      {errors?.username?.type === "required" ? (
        <p style={{ color: "red" }}>Username is required</p>
      ) : null}
      {errors?.username?.type === "minLength" ? (
        <p style={{ color: "red" }}>Username must be more than 3 characters</p>
      ) : null}
      <label htmlFor="username">Username</label>
      <input
        {...register("username", { required: true, minLength: 4 })}
        type="text"
        name="username"
        id="username"
      />

      {errors?.password?.type === "required" ? (
        <p style={{ color: "red" }}>Password is required</p>
      ) : null}
      {errors?.password?.type === "minLength" ? (
        <p style={{ color: "red" }}>Password must be more than 3 characters</p>
      ) : null}
      <label htmlFor="password">Password</label>
      <input
        {...register("password", { required: true, minLength: 4 })}
        type="password"
        name="password"
        id="password"
      />

      <button>Submit</button>
    </form>
  );
}
