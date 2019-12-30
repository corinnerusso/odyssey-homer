import React, { useState } from "react";

const SignUp = props => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    lastname: ""
  });

  const [flash, setFlash] = useState({ flash: "" });

  const updateForm = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    fetch("/auth/signup", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(
        res => setFlash({ flash: res.flash }),
        err => setFlash({ flash: err.flash })
      );
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <h1>{JSON.stringify(form, 1, 1)}</h1>

        <input
          type="text"
          name="name"
          onChange={updateForm}
          placeholder="name"
        />

        <input
          type="text"
          name="lastname"
          onChange={updateForm}
          placeholder="lastname"
        />

        <input
          type="email"
          name="email"
          onChange={updateForm}
          placeholder="EMAIL"
        />

        <input
          type="password"
          name="password"
          onChange={updateForm}
          placeholder="password"
        />

        <input
          type="password"
          name="passwordbis"
          onChange={updateForm}
          placeholder="confirm password"
        />

        <input type="submit" value="Soumettre" />
      </form>
      <h2>{flash.flash}</h2>
    </div>
  );
};

export default SignUp;
