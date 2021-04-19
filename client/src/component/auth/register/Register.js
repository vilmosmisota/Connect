import React, { useState } from "react";
import "./register.css";
import { useDispatch } from "react-redux";
import { register } from "../../../redux/actions/authActions";

const Register = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = inputs;
  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    dispatch(register(inputs));
  };

  return (
    <section className="auth-form-container">
      <form onSubmit={onSubmitForm}>
        <input
          className=""
          type="text"
          name="name"
          placeholder="Username"
          value={name}
          onChange={(e) => onChange(e)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => onChange(e)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => onChange(e)}
        />
        <button>JOIN</button>
      </form>
    </section>
  );
};

export default Register;
