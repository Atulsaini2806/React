import { LOGO_URL } from "../utils/constant";
import {useState } from "react";
import {Link} from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  // console.log("Header Render");
  // dependency array is not mandatory inside the useEffect but callback function is mandatory.
  // if there is no dependency array -> useEffect is called or callback function will be executed after every render.
  // if dependency array is empty -> useEffect is called or callback function will be executed only once after initial render.
  // if dependency array has some variables -> useEffect is called or callback function will be executed whenever the dependency variable changes.
  // or if dependency variable is [btnNameReact] -> called everytime btnNameReact is updated .
  // useEffect(() => {
  //   console.log("useEffect called");
  // }, [btnNameReact]);

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
             <Link to ="/about">About Us</Link>
          </li>
          <li> 
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <button 
          className="login"
          onClick={() => { 
             btnNameReact === "Login" 
             ? setBtnNameReact("Logout") 
             :   setBtnNameReact("Login");
          }}>
            {btnNameReact}
            </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;