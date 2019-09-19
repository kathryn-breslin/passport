import React from "react";

interface IProps {
  username: string;
  password: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFormSearch: (event: React.MouseEvent<HTMLElement>) => void;
}

const Signup = ({
  username,
  password,
  handleInputChange,
  handleFormSearch
}: IProps) => {
  return (
    <form>
      <div className="form-group">
        <input
          type="username"
          className="form-control"
          id="username"
          name="username"
          aria-describedby="username"
          placeholder="Enter Username"
          onChange={handleInputChange}
          value={username}
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control"
          name="password"
          id="exampleInputPassword1"
          placeholder="Password"
          onChange={handleInputChange}
          value={password}
        />
      </div>
      <button 
        onClick={handleFormSearch}
        type="submit" className="btn btn-primary" >Submit</button>
    </form>
  );
};

export default Signup;