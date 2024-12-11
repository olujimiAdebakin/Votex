
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

  const [userData, setUserData] = useState({ fullName: '', Email: "", password: "", password2: "" })
  

  // function to change our controlled input
  const changeInputHandler = (e) => {
    setUserData(prevState => {
      return {...prevState, [e.target.name]: e.target.value}
    })

   
  }
  return (
    <>
      <section className="register">
        <div className="register_container">
          <h2>Sign Up</h2>
          <form>
            <p className="form_error-message">Any Error from the server</p>
            <input
              type="text"
              placeholder="Full Name"
              autoComplete="true"
              name='fullName'
              autoFocus
              onChange={changeInputHandler}
            />
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
            <input
              type="password"
              placeholder="Confirm Password"
              autoComplete="true"
              name="password2"
              onChange={changeInputHandler}
            />
            <p>
              Already have an account? <Link href="/">Sign in</Link>
            </p>
            <div className="btn primary">Register</div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Register