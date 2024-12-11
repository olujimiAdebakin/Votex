import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({
    fullName: "",
    Email: "",
    password: "",
    password2: "",
  });

  // function to change our controlled input
  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });

    
  };
  return (
    <>
      <section className="register">
        <div className="register_container">
          <h2>Sign In</h2>
          <form>
            <p className="form_error-message">Any Error from the server</p>
        
            <input
              type="email"
              placeholder="Email"
              autoComplete="true"
              name="Email"
              onChange={changeInputHandler}
            />
            <input
              type="password"
              placeholder="Password"
              autoComplete="true"
              name="password"
              onChange={changeInputHandler}
            />
         
            <p>
              Dont have an account? <Link href="/register">Sign Up</Link>
            </p>
            <div className="btn primary">Login</div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
