import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions/authActions";

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
    <section>
      <h1>REGISTER</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={(e) => onChange(e)}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={(e) => onChange(e)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={(e) => onChange(e)}
        />
        <button>Submit</button>
      </form>
    </section>
  );
};

export default Register;
