import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import { Input, Text, Add, Edit, Delete } from "../../components/Inputs/Inputs";

class MedList extends Component {

    state = {
        medication: "",
        prescribed_by: "",
        frequency: "",
        notes: ""
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
                    <Input className="newMed" value={ this.state.medication } onChange={ this.handleInputChange } name="medication" placeholder="Enter medication name..." />
                    <Input className="newDoc" value={ this.state.prescribed_by } onChange={ this.handleInputChange } name="prescribed_by" placeholder="Enter prescriber name..." />
                    <Input className="newFreq" value={ this.state.frequency } onChange={ this.handleInputChange } name="frequency" placeholder="Enter medication frequency..." />
                    <Text className="medNotes" value={ this.state.notes } onChange={ this.handleInputChange } name="notes" placeholder="Enter medication notes..." />

                </form>
                <form>
                    <Input />
                    <Add />
                    <Edit />
                    <Delete />

                </form>
            </div>
        );
    };

};

export default MedList;