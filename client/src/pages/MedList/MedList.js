import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Input, Text, Note, Add, Edit, Delete } from "../../components/Inputs/Inputs";
import API from "../../utils/API";
import "./style.css";

class MedList extends Component {

    state = {
        medication: "",
        prescribed_by: "",
        frequency: "",
        notes: "",
        records: []
    };

    componentDidMount() {
        this.loadMeds();
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [ name ]: value
        });
    };

    saveRec = event => {
        event.preventDefault();

        API.saveMedRec({
            medication: this.state.medication,
            prescribed_by: this.state.prescribed_by,
            frequency: this.state.frequency,
            notes: this.state.notes
        })
        .then(res => this.loadMeds())
        .catch(err => console.log(err));
    };

    loadMeds = () => {
        API.getRecs()
        .then(res => {
            this.setState({
                records: res.data,
                medication: "",
                prescribed_by: "",
                frequency: "",
                notes: ""
            });
        })
        .catch(err => console.log(err));
    }

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
                    <Add onClick={ this.saveRec } />
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