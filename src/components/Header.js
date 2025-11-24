import { LOGO_URL } from "../utils/constant";
import {useState } from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


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

 const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-100 md:bg-green-100 lg:bg-purple-100">
      <div className="logo-container">
        <img
          className="w-30"
          src={LOGO_URL}
          alt="logo"
        />
      </div>
      <div className="flex items-center">
        <ul className = "flex p-4 m-4" >
          <li className="px-4">
            Online status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
             <Link to ="/about">About Us</Link>
          </li>
          <li className="px-4"> 
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4"> 
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
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