
import { Link, NavLink } from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6";
import { IoIosMoon } from 'react-icons/io';
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container nav_container">
          <Link to="/" className="nav_logo">
            VOTEX
          </Link>

          <menu>
            <NavLink to="/elections">Elections</NavLink>
            <NavLink to="/results">Results</NavLink>
            <NavLink to="/logout">Logout</NavLink>
          </menu>

          <button className="theme_toggle_btn">
            <IoIosMoon />
          </button>
          <button className="nav_toggle_btn">
            <FaBarsStaggered />
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar