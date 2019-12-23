import React, { useState } from "react";

const SignUp = () => {
  const [form, setForm] = useState({
    email: "mon@email.com",
    password: "monPassw0rd",
    name: "James",
    lastname: "Bond"
  });

  const updateForm = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    console.log(form);
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
    </div>
  );
};

export default SignUp;
