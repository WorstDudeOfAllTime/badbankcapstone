import 'NavBar.css';
const NavBar = () => {
  //Nav bar need
  // Home Page, this should be the logo which will include login/signup buttons
  // 
  return (
    <div className="navContainer">
      <div className="logoSide"></div>
      <div className="navSide">
        <nav>
          <ul>
            <li><a>Accounts</a></li>
            <li><a>All Users</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
          </ul>
        </nav>
        <button>Sign Up.</button>
      </div>
    </div>
  )
}

export default NavBar;