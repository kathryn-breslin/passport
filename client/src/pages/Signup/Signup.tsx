import React, { Component } from "react";
import { Signup } from "../../components/index";
import { Link } from "react-router-dom";
import API from "../../utils/API";

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

  handleFormSubmit = (event: { preventDefault: () => void }) => {
    const { username, password } = this.state;

    event.preventDefault();
    this.setState({ username: username, password: password });

    console.log("Username:" + username);
    console.log("Password:" + password);

    API.saveUser({
      username: username, 
      password: password
    })
    .then(res => console.log("Saved User: " + res))
    .catch(err => console.log(err));
    
  };

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <div className="nav">
          <Link to="/login">Login</Link>
        </div>
        <Signup
          username={username}
          password={password}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
      </div>
    )
  }
}

export default SignUpComponent;