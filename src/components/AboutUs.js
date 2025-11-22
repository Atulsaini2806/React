import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";


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
        <h2>This is the about us page.</h2>

        <UserClass name={"Atul Saini(classes)"} location={"Meerut(class)"} />
      </div>
    );
  }
}

export default AboutUs;