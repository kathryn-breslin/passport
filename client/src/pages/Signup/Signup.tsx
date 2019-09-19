import React, { Component } from "react";
import { Signup } from "../../components/index";

interface ISignUp {
  username: string;
  password: string;
}

class SignUpComponent extends Component {
  state: ISignUp = {
    username: "",
    password: ""
  };

  handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log({ [name]: value });
  };

  handleFormSearch = (event: { preventDefault: () => void }) => {
    const { username, password } = this.state;

    event.preventDefault();
    this.setState({ username: username, password: password });

    console.log("Username:" + username);
    console.log("Password:" + password);

  };

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <Signup
          username={username}
          password={password}
          handleInputChange={this.handleInputChange}
          handleFormSearch={this.handleFormSearch}
        />
      </div>
    )
  }
}

export default SignUpComponent;