import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function Registration({regData}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function getData(e){
    e.preventDefault();
    const data = {
      name, email, password
    }

    regData(data);

  return (
    <div>
      <h2>Welcome to Registration Page</h2>
      
      <form>
        
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button onClick={getData} type="submit" class="btn btn-primary">
          Submit
        </button>
      
      </form>
    
    </div>
  );
};
}

export default Registration;
