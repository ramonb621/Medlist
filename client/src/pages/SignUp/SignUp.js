import React, { Component } from "react";
import { Input, Join } from "../../components/Inputs/Inputs";
import { Link, Redirect } from "react-router-dom";

class SignUp extends Component {


    render () {

        return(
            <div className="log-cont">
                <p className="signUp-title">Sign Up</p>
                <div className="sub-cont">
                    <Input className="userName" placeholder="Username" />
                    <Input className="userPassword" placeholder="Password" />
                    <Join />
                    <p>Already a member? Sign in <Link to="/login">here</Link>!</p>
                </div>
            </div>
        );

    };
};
export default SignUp;