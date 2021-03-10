import React from "react";
import "./style.css";

export const Input = props => {
    return (
        <input type="text" { ...props } />
    );
};

export const Text = props => {
    return (
        <div>
            <textarea className="text-area" rows="40" { ...props } />
        </div>
    );
};

export const Note = ({ children }) => {
    return (
        <p className="med-note">{ children }</p>
    );
};

export const Add = props => {
    return (
        <button { ...props } className="add">Add</button>
    );
};

export const Edit = props => {
    return (
        <button { ...props } className="edit">Edit</button>
    );
};

export const Delete = props => {
    return (
        <button { ...props } className="delete">Delete</button>
    );
};

export const SignIn = props => {
    return (
        <button { ...props } className="signIn">Sign In</button>
    );
};

export const Join = props => {
    return (
        <button { ...props } className="signUp">Sign Up</button>
    );
};