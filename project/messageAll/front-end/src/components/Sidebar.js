import React from "react";
import {
    Link
} from "react-router-dom";

export default class Sidebar extends React.Component {
    constructor(){
        super();
        this.state ={
            users: []
        }
    }

    render(){
        return (
            <div className="sidebar">
                <div className="profile">
                    
                    <div className="home">
                        <Link to="/"><img src="./images/flat-blue-home-icon-4.png" alt="Home" /></Link>
                    </div>
                    <div className="logout">
                        <Link to="/logout"><img src="./images/276363.png" alt="Logout" /></Link>
                    </div>
                    <a href={"/user/" + localStorage.getItem('userId')} >
                        <img src="./images/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg" alt="profile" />
                        <h2>{localStorage.getItem('userName')}</h2>
                    </a>
                    {
                        localStorage.getItem('token')? "" : (

                            <Link to="/signin">
                                <div className="btn">
                                    Signin
                                </div>
                            </Link>
                        )
                    }
                </div>
                <div className="users">
                    <ul>
                        
                    </ul>
                </div>
            </div>
        )
    }

    componentDidMount(){

    }
}