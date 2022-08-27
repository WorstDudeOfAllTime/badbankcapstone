import "./SignUp.css";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const SignUp = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [userCreated, setUserCreated] = useState(false);
  const navigate = useNavigate();
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }
  async function onSubmit(e) {
    e.preventDefault();
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
    navigate("/");
  }
  return (
    <div className="signup-container flex-cent-col">
      <div className="signup-content flex-cent">
        <div className="signup-form flex-cent-col">
          <div className="pic-banner"></div>
          <div className="form-box flex-cent-col">
            <form className="flex-cent-col" onSubmit={onSubmit}>
              <h2>Create Account.</h2>
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
              <button>Sign Up.</button>
            </form>
            <div className="success">
              {!userCreated ? <></> : <>User Created Successfully</>}
            </div>
          </div>
          <div className="pic-banner"></div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
