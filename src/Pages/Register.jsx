
import { Link } from 'react-router-dom';

const Register = () => {
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
              autoFocus
            />
            <input
              type="email"
              placeholder="Email"
              autoComplete="true"
              name="Email"
            />
            <input
              type="password"
              placeholder="Password"
              autoComplete="true"
              name="password"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              autoComplete="true"
              name="password"
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