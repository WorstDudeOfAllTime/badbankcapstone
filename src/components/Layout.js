import './Layout.css';
import {Link} from 'react-router-dom';
import Login from './Login';

const Layout = () => {
    const iconStyle = {height: '40px', width: '40px', filter:'invert(1)', marginRight: '15px'}
  return (
    <div className="navBox flex-cent">
      <div className="navSide flex-cent-col">
      <div className="accountHolder">
        <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" style={{height: '100px', width: '100px', borderRadius: '50%'}}></img>
        <h2 style={{color: 'white'}}>Kris Bertolino</h2>
      </div>
        <nav className="flex-cent-col">
          <ul>
            <li>
            <img src="https://cdn-icons-png.flaticon.com/512/181/181549.png" style={iconStyle}></img>
              <a>Login</a>
            </li>
            <li>
            <img src="https://cdn-icons-png.flaticon.com/512/181/181549.png" style={iconStyle}></img>
              <a>Create Account</a>
            </li>
            <li>
            <img src="https://cdn-icons-png.flaticon.com/512/181/181549.png" style={iconStyle}></img>
              <a>About</a>
            </li>
            <li>
            <img src="https://cdn-icons-png.flaticon.com/512/181/181512.png" style={iconStyle}></img>
              <a>All Customers</a>
            </li>
            <li>
            <img src="https://cdn-icons-png.flaticon.com/512/181/181540.png" style={iconStyle}></img>
              <a>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="contentSide">
        <Login/>
      </div>
    </div>
  );
};

export default Layout;
