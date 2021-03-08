import React from "react";
import "./style.css";

export function Input(props) {
    return (
        <input type="text" { ...props } />
    );
};

export function Text(props) {
    return (
        <div>
            <textarea className="text-area" rows="40" { ...props } />
        </div>
    );
};

export function Add(props) {
    return (
        <button { ...props } className="add">Add</button>
    );
};

export function Edit(props) {
    return (
        <button { ...props } className="edit">Edit</button>
    );
};

export function Delete(props) {
    return (
        <button { ...props } className="delete">Delete</button>
    );
};

export default { Input, Add, Edit, Delete };