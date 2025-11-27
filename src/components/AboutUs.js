import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
import UserContext from "../utils/UserContext";


class AboutUs extends Component {

  constructor(props) {
    super(props);
    //console.log("Parent constructor");
  }


  componentDidMount(){
        //console.log("Parent componentDidMount");
        //Best place to make API calls
    }


  render() {
    //console.log("Parent render");
    
    return (
      <div>
        <h1>About class Component</h1>
        <div>
       LoggedIn User
          <UserContext.Consumer>
            {({loggedInUser}) => (
             <h1 className="text-xl font-bold">{loggedInUser}</h1>
            
           ) }
          </UserContext.Consumer>
        </div>
        <h2>This is the about us page.</h2>
        <UserClass name={"Atul Saini(classes)"} location={"Meerut(class)"} />
      </div>
    );
  }
}

export default AboutUs;