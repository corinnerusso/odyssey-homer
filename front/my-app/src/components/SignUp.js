import React, { Component } from "react";

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
    this.updateEmailField = this.updateEmailField.bind(this);
  }
  updateEmailField(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    alert("Le nom a été soumis : " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>{this.state.email}</h1>
        <input
          type="email"
          name="email"
          onChange={this.updateEmailField}
          value={this.state.value}
        />
      </div>
    );
  }
}

export default SignUp;
