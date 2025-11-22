import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        
       this.state = {
        userInfo : { 
            name : "Dummy Name",
         location : "Dummy Location",
         avatar_url : "https://avatars.githubusercontent.com/u/9919?v=4"
        }
       }
       
       //console.log("child constructor ");
    }

    async componentDidMount(){
        //console.log("child componentDidMount");

        const data = await fetch("https://api.github.com/users/Atulsaini2806");
        const json = await data.json();
         
        this.setState({
            userInfo : json,
        })
    }

    render(){
    
        //console.log("child render");
        const {name, location, avatar_url} = this.state.userInfo; 
        return(
        <div className="user-card">
            <img src={avatar_url} />
            <h2>Name : {name}</h2>
            <h2>Location : {location}</h2>
            <h2>Contact : @atul.com</h2>
        </div>
        )
    }
}
export default UserClass;
