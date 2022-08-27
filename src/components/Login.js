import "./Login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const Login = ({ setUserBalance, setCurrentUser }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [userCreated, setUserCreated] = useState(false);
  const [loggingIn, setLoggingIn] = useState(true);
  const [userLogged, setUserLogged] = useState(false);
  const navigate = useNavigate();
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (loggingIn) {
      const newPerson = { ...form };
      console.log(newPerson);
      const response = await fetch(
        `http://localhost:5000/login/${newPerson.email}/${newPerson.password}`
      );
      const user = await response.json();
      console.log(user);
      if (user === null) {
        console.log("user not found or password was incorrect");
      }
      setCurrentUser(user.email);
      setUserBalance(user.balance);
      setUserLogged(true);
      navigate("/");
    } else {
      const newPerson = { ...form };
      await fetch(`http://localhost:5000/createUser`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPerson),
      }).catch((error) => {
        return;
      });
      setUserCreated(true);
      setForm({ email: "", password: "" });
      setLoggingIn(true);
      navigate("/");
    }
  }

  return (
    <div className="login-container flex-cent-col">
      <div className="login-content flex-cent">
        <div className="login-form flex-cent-col">
          <div className="form-box flex-cent-col">
            <form className="flex-cent-col" onSubmit={onSubmit}>
              {loggingIn ? <h2>Login.</h2> : <h2>Open an Account.</h2>}
              <input
                value={form.email}
                type="email"
                placeholder="Enter your Email"
                onChange={(e) => updateForm({ email: e.target.value })}
              ></input>
              <input
                value={form.password}
                type="password"
                placeholder="Enter your Password"
                onChange={(e) => updateForm({ password: e.target.value })}
              ></input>
              <button>Submit.</button>
            </form>
            <div className="success">
              {!userLogged ? <></> : <>{`Welcome ${form.email}`}</>}
            </div>
            <div
              className="createAccount flex-cent"
              onClick={(e) => {
                e.preventDefault();
                setLoggingIn(!loggingIn);
              }}
            >
              {loggingIn ? "Open An Account." : "Login."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
