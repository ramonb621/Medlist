import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Input, Text, Note, Add, Edit, Delete } from "../../components/Inputs/Inputs";
import "./style.css";

class MedList extends Component {

    state = {
        medication: "",
        prescribed_by: "",
        frequency: "",
        notes: "",
        records: []
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [ name ]: value
        });
    };

    render() {
        return(
            <div className="container">
                <form>
                    <p className="save-title">Add New Med Record: </p>
                    <ul>
                        <li>
                            <Input className="newMed" value={ this.state.medication } onChange={ this.handleInputChange } name="medication" placeholder="Enter medication name..." />
                        </li>
                        <li>
                            <Input className="newDoc" value={ this.state.prescribed_by } onChange={ this.handleInputChange } name="prescribed_by" placeholder="Enter prescriber name..." />
                        </li>
                        <li>
                            <Input className="newFreq" value={ this.state.frequency } onChange={ this.handleInputChange } name="frequency" placeholder="Enter medication frequency..." />
                        </li>
                        <li>
                            <Text className="medNotes" value={ this.state.notes } onChange={ this.handleInputChange } name="notes" placeholder="Enter medication notes..." />
                        </li>
                    </ul>
                    <Add />
                </form>
                <form>
                    <p className="rec-title">Saved Meds: </p>
                    <Note />
                    <Edit />
                    <Delete />
                </form>
            </div>
        );
    };

};

export default MedList;