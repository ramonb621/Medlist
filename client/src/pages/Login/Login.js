import React, { Component } from "react";
import { Input, SignIn } from "../../components/Inputs/Inputs";
import { Link, Redirect } from "react-router-dom";

class Login extends Component {


    render () {

        return(
            <div className="log-cont">
                <p className="signIn-title">Sign In</p>
                <div className="sub-cont">
                    <Input className="userName" placeholder="Username" />
                    <Input className="userPassword" placeholder="Password" />
                    <SignIn />
                    <p>Not a member? Join <Link to="/signup">here</Link>!</p>
                </div>
            </div>
        );

    };
};
export default Login;