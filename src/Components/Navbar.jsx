
import { Link, NavLink } from 'react-router-dom'
import { IoIosMoon, IoMdSunny } from 'react-icons/io';
import { useEffect, useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { SlMenu } from 'react-icons/sl';
const Navbar = () => {

  const [showNav, setShowNav] = useState(window.innerWidth > 600);
  const [darkTheme, setDarkTheme] =useState(localStorage.getItem('voting-app-theme'))


  // function to close nav menu on small screens when menu link is clicked
  const closeNavMenu = () => {
    if (window.innerWidth < 600) {
      setShowNav(false);
    } else {
      setShowNav(true)
    }
  };

  const changeThemeHandler = () => {
    if (localStorage.getItem('voting-app-theme') == 'dark') {
      localStorage.setItem('voting-app-theme', '')
    } else {
      localStorage.setItem('voting-app-theme', 'dark')
    }
    setDarkTheme(localStorage.getItem('voting-app-theme'))
  }

  useEffect(() => {
    document.body.className = localStorage.getItem('voting-app-theme')
  }, [darkTheme])

  return (
    <>
      <nav>
        <div className="container nav_container">
          <Link to="/" className="nav_logo">
            VOTEX
          </Link>

          <div>
            {showNav && (
              <menu>
                <NavLink to="/elections" onClick={closeNavMenu}>
                  Elections
                </NavLink>
                <NavLink to="/results" onClick={closeNavMenu}>
                  Results
                </NavLink>
                <NavLink to="/logout" onClick={closeNavMenu}>
                  Logout
                </NavLink>
              </menu>
            )}

            <button className="theme_toggle_btn" onClick={changeThemeHandler}>
              {darkTheme ? <IoMdSunny/> :  <IoIosMoon /> }
            </button>
            <button
              className="nav_toggle_btn"
              onClick={() => setShowNav(!showNav)}
            >
              {showNav ? <GrClose /> : <SlMenu />}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar